import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

const Card = ({ link, name, likesCount, onCardClick, onCardLike, onCardDelete, card }) => {
  const { _id } = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === _id;                                                                    // Определяем, являемся ли мы владельцем текущей карточки
  const isLiked = card.likes.some(i => i._id === _id);                                                     // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const cardLikeButtonClassName = (`card__like-button ${isLiked && 'card__like-button_active'}`);          // Создаём переменную, которую после зададим в `className` для кнопки лайка

  return (
    <article className="card">
      <img className="card__image" alt={name} src={link} onClick={() => onCardClick(card)} />
      {isOwn && ( <button type="button" className="card__remove-button" onClick={() => onCardDelete(card)}></button>)}
      <div className="card__container">
        <h2 className="card__title">{name}</h2>
          <div className="card__like-wrapper">
            <button className={cardLikeButtonClassName} type="button" aria-label="Поставить лайк" onClick={() => onCardLike(card)}></button>
            <p className="card__like-count">{likesCount}</p>
          </div>
      </div>
    </article>
  );
};

export default Card;
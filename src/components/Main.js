import React from "react";
import CurrentUserContext from '../contexts/CurrentUserContext';
import Card from './Card.js';

const Main = ({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) => {
  const { name, about, avatar } = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile" aria-label="Профайл автора с аватаркой">
        <div className="profile__avatar-wrapper">
          <img className="profile__avatar" src={avatar} alt="Аватар профиля" />
          <div className="profile__avatar-edit" onClick={onEditAvatar}></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{name}</h1>
          <button className="profile__btn-edit" onClick={onEditProfile} type="button"></button>
          <p className="profile__about">{about}</p>
        </div>
        <button className="profile__btn-add" onClick={onAddPlace} type="button"></button>
      </section>

      <section className="cards" aria-label="Карточки с интересными местами в России">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              name={card.name}
              link={card.link}
              likesCount={card.likes.length}
              onCardClick={onCardClick}
              card={card}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
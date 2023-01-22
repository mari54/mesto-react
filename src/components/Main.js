import React from "react";
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userAbout, setUserAbout] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getProfile().then((user) => {
      setUserName(user.name);
      setUserAbout(user.about);
      setUserAvatar(user.avatar);
    })
      .catch((err) => {
        console.log(err);
      });

    api.getInitialCards().then((cards) => {
      setCards(cards);
    })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <main className="content">
      <section className="profile" aria-label="Профайл автора с аватаркой">
        <div className="profile__avatar-wrapper">
          <img className="profile__avatar" src={userAvatar} alt="Аватар профиля" />
          <div className="profile__avatar-edit" onClick={props.onEditAvatar}></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__btn-edit" onClick={props.onEditProfile} type="button" title="Редактировать профиль"></button>
          <p className="profile__about">{userAbout}</p>
        </div>
        <button className="profile__btn-add" onClick={props.onAddPlace} type="button" title="Добавить новую фотографию"></button>
      </section>

      <section className="cards" aria-label="Карточки с интересными местами в России">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              name={card.name}
              link={card.link}
              likes={card.likes.length}
              onCardClick={props.onCardClick}
              card={card}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
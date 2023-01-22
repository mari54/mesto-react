import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import '../index.css';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard({
      name: card.name,
      link: card.link
    });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (

      <div className="page">
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
        <Footer />

        <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name="edit-avatar" title="Обновить аватар" buttonText="Сохранить">
            <div className="popup__input-label">
              <input className="popup__input popup__input_type_link" type="url" name="avatar" id="input-avatar" placeholder="https://somewebsite.com/someimage.jpg" required />
              <span className="input-avatar-error popup__form-error"></span>
            </div>
        </PopupWithForm>

        <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name="edit_profile" title="Редактировать профиль" buttonText="Сохранить">
              <div className="popup__input-label">
                <input className="popup__input popup__input_type_name" id="input-name" type="text" name="name" placeholder="Имя" minLength="2" maxLength="40" required />
                <span className="input-name-error popup__form-error"></span>
              </div>
              <div className="popup__input-label">
                <input className="popup__input popup__input_type_description" id="input-description" type="text" name="about" placeholder="О себе" minLength="2" maxLength="200" required />
                <span className="input-description-error popup__form-error"></span>
              </div>
        </PopupWithForm>

        <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name="add_place" title="Новое место" buttonText="Создать">
              <div className="popup__input-label">
                <input className="popup__input popup__input_type_place" id="input-place" type="text" name="name" placeholder="Название" minLength="2" maxLength="30" required />
                <span className="input-place-error popup__form-error"></span>
              </div>
              <div className="popup__input-label">
                <input className="popup__input popup__input_type_link" id="input-link" type="url" name="link" placeholder="Ссылка на картинку" required />
                <span className="input-link-error popup__form-error"></span>
              </div>
        </PopupWithForm>

        <PopupWithForm name="popup_you-sure" title="Вы уверены?" buttonText="Да" />

        <ImagePopup name="popup_picture" isOpen={isImagePopupOpen} onClose={closeAllPopups} card={selectedCard} />

      </div>

  );
}

export default App;

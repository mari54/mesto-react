import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {
  const [name, setName] = React.useState("");
  const [about, setAbout] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext); // Подписка на контекст

  React.useEffect(() => {
    setName(currentUser.name || "");
    setAbout(currentUser.about || "");
  }, [currentUser]); // После загрузки текущего пользователя из API, его данные будут использованы в управляемых компонентах

  function handleSubmit(e) {
    e.preventDefault(); // Запрещаем браузеру переходить по адресу формы
    onUpdateUser(name, about); // Передаём значения управляемых компонентов во внешний обработчик
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="edit_profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
    >
      <div className="popup__input-label">
        <input
          className="popup__input popup__input_type_name"
          id="input-name"
          type="text"
          name="name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="input-name-error popup__form-error"></span>
      </div>
      <div className="popup__input-label">
        <input
          className="popup__input popup__input_type_description"
          id="input-description"
          type="text"
          name="about"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
        <span className="input-description-error popup__form-error"></span>
      </div>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
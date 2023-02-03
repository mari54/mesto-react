import React from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
  const avatarRef = React.useRef(); // Вместо управляемых компонентов используем Реф
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatarRef.current.value); // Значение инпута, полученное с помощью Рефа
  }

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="edit-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
    >
      <div className="popup__input-label">
        <input
          className="popup__input popup__input_type_link"
          type="url"
          name="avatar"
          id="input-avatar"
          placeholder="https://somewebsite.com/someimage.jpg"
          required
          ref={avatarRef}
        />
        <span className="input-avatar-error popup__form-error"></span>
      </div>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
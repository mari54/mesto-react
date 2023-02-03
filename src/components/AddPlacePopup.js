import React from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {
  const [title, setTitle] = React.useState("");
  const [link, setLink] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace(title, link);
  };

  React.useEffect(() => {
    setLink("");
    setTitle("");
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="add_place"
      title="Новое место"
      buttonText="Создать"
    >
      <div className="popup__input-label">
        <input
          className="popup__input popup__input_type_place"
          id="input-place"
          type="text"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
          value={title || ''}
          onChange={(e) => setTitle(e.target.value)}
        />
        <span className="input-place-error popup__form-error"></span>
      </div>
      <div className="popup__input-label">
        <input
          className="popup__input popup__input_type_link"
          id="input-link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
          value={link || ''}
          onChange={(e) => setLink(e.target.value)}
        />
        <span className="input-link-error popup__form-error"></span>
      </div>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
import React from "react";

const PopupWithForm = ({ title, name, isOpen, onClose, buttonText, children }) => {
  return (
    <div className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <form className={`popup__form popup__form_${name}`} name={`${name}-form`} noValidate>
          <h2 className="popup__title">{title}</h2>
          <fieldset className="popup__fieldset">
            {children}
          </fieldset>
          <button type="submit" name="profile__save" className="popup__btn-save">{buttonText}</button>
        </form>
        <button onClick={onClose} className="popup__btn-close" type="button" aria-label="Закрыть"></button>
      </div>
    </div>
  );
};

export default PopupWithForm;

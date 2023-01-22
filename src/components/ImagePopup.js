import React from 'react';

function ImagePopup(props) {
  return (
    <section className={`popup popup_picture ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__image-wrapper">
        <button className="popup__btn-close" type="button" onClick={props.onClose} />
        <img src={props.card.link} className="popup__image" alt={props.card.name} />
        <p className="popup__description">{props.card.name}</p>
      </div>
    </section>
  );
};

export default ImagePopup;
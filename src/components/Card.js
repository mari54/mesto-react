import React from 'react';

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="card">
      <img className="card__image" alt={props.name} src={props.link} onClick={handleClick} />
      <div className="card__container">
        <h2 className="card__title">{props.name}</h2>
          <div className="card__like-wrapper">
            <button className="card__like-button" type="button"></button>
            <p className="card__like-count">{props.likes}</p>
          </div>
         <button className="card__remove-button" type="button"></button>
      </div>
    </article>
  )
}

export default Card;
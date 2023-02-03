class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkServer(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getProfile() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then(this._checkServer);
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then(this._checkServer);
  }

  setUserInfo(name, about) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._checkServer);
  }

  setUserAvatar(avatar) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    }).then(this._checkServer);
  }

  changeLikeCardStatus(id, isLiked) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: `${isLiked ? 'PUT' : 'DELETE'}`,
      headers: this._headers,
    }).then(this._checkServer);
  }

  addLike(object) {
    return fetch(`${this._url}/cards/${object._id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkServer);
  }

  deleteLike(object) {
    return fetch(`${this._url}/cards/${object._id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkServer);
  }

  addCards(title, link) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: title,
        link: link,
      }),
    }).then(this._checkServer);
  }

  deleteCards(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkServer);
  }

  getPromiseAll() {
    return Promise.all([
        this.getProfile(),
        this.getInitialCards()
    ]);
  }
}


const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-56',
    headers: {
      authorization: 'bf2cf826-fde2-404a-975b-9140a627987e',
      'Content-Type': 'application/json'
    }
  });
  
  export default api;

import config from "../config";

const AuthApiService = {
  postLogin({ username, password }) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "content-type": "application/json"
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/register`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json"
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default AuthApiService;

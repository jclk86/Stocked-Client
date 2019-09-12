import config from "../config";

const InventoryApiService = {
  getInventory(user_id) {
    return fetch(`${config.API_ENDPOINT}/user/${user_id}/inventory`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getAllTags() {
    return fetch(`${config.API_ENDPOINT}/tags`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getByUserAndItemId(user_id, item_id) {
    return fetch(
      `${config.API_ENDPOINT}/user/${user_id}/inventory/${item_id}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json"
        }
      }
    ).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postItem(item, user_id) {
    return fetch(`${config.API_ENDPOINT}/user/${user_id}/inventory`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(item)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  updateItem(item, user_id, item_id) {
    return fetch(
      `${config.API_ENDPOINT}/user/${user_id}/inventory/${item_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(item)
      }
    ).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default InventoryApiService;

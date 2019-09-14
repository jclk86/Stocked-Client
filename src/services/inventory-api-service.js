import config from "../config";
import TokenService from "../services/token-service";

const InventoryApiService = {
  getInventory(user_id) {
    return fetch(`${config.API_ENDPOINT}/user/${user_id}/inventory`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
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
          "content-type": "application/json",
          authorization: `bearer ${TokenService.getAuthToken()}`
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
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(item)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  // ask about this later
  updateItem(item, user_id, item_id) {
    return fetch(
      `${config.API_ENDPOINT}/user/${user_id}/inventory/${item_id}`,
      {
        method: "PATCH",
        body: JSON.stringify(item),
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${TokenService.getAuthToken()}`
        }
      }
    ).then(res => (!res.ok ? Promise.reject(res) : res));
  },

  deleteItem(user_id, item_id) {
    return fetch(
      `${config.API_ENDPOINT}/user/${user_id}/inventory/${item_id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${TokenService.getAuthToken()}`
        }
      }
    ).then(res => {
      if (!res.ok) {
        return res.json().then(error => Promise.reject(error));
      }
    });
  }
};

export default InventoryApiService;

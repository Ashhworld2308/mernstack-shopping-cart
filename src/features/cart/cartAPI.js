import { API_URL } from "../../app/constants";

export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${API_URL}/cart`, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function fetchItemsByUserId(userId) {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(`${API_URL}/cart?user=${userId}`)
    const data = await response.json()
    resolve({ data });
  }
  );
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(`${API_URL}/cart/${update.id}`, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: {
        'content-type': "application/json"
      }
    })
    const data = await response.json()
    resolve({ data })
  }
  );
}

export function deleteCartItem(itemId) {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(`${API_URL}/cart/${itemId}`, {
      method: 'DELETE',
      headers: {
        'content-type': "application/json"
      }
    })
    const data = await response.json()
    resolve({ data: {
      id: itemId
    } })
  }
  );
}
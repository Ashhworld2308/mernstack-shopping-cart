import { API_URL } from "../../app/constants";

export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(`${API_URL}/products`)
    const data = await response.json()
    resolve({ data })
  });
}

export function fetchProductByID(id) {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(`${API_URL}/products/${id}`)
    const data = await response.json()
    resolve({ data })
  });
}

export function fetchProductsByFilters(filter, sort, pagination) {
  // filter = {"category":"smartphone"}
  // TODO : on server we will support multi values
  let queryString = '';
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length >= 1) {
      const lastCV = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCV}&`;
    }
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  console.log(pagination);
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(`${API_URL}/products?${queryString}`)
    const data = await response.json();
    const totalItems = await response.headers.get('X-Total-Count');
    resolve({ data: { products: data, totalItems: totalItems } })
  }
  );
}

export function fetchAllCategories() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(`${API_URL}/categories`)
    const data = await response.json()
    resolve({ data })
  }
  );
}

export function fetchAllBrands() {
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(`${API_URL}/brands`)
    const data = await response.json()
    resolve({ data })
  }
  );
}
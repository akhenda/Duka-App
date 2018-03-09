import { CLEAR_PRODUCTS, ADD_TO_CART } from 'src/state/types';
import { fetchProduct, fetchProducts } from 'src/models/product';


export const getProducts = (token, page) => {
  return dispatch => fetchProducts(dispatch, token, page);
};

export const getProduct = (token, id) => dispatch => fetchProduct(dispatch, token, id);

export const addToCart = (price) => {
  return {
    type: ADD_TO_CART,
    payload: price,
  };
};

export const clearProducts = () => {
  return { type: CLEAR_PRODUCTS };
};

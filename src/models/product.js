import API from 'src/services/api';
import DebugConfig from 'src/config/debug';
import FixtureAPI from 'src/services/fixtureApi';

import {
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from 'src/state/types';


const api = DebugConfig.useFixtures ? FixtureAPI : API.create();

export const fetchProducts = (dispatch, token, page, limit=10) => {
  api.setHeader('Authorization', `Bearer ${token}`);
  api
    .getProducts(page, limit)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: FETCH_PRODUCTS_SUCCESS,
          payload: { products: res.data, totalPages: res.data.meta.pages },
        });
      } else {
        dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: res.data });
      }
    });
};

export const fetchProduct = (dispatch, token, id) => {
  api.setHeader('Authorization', `Bearer ${token}`);
  api
    .getProduct(id)
    .then((res) => {
      if (res.status === 200) {
        dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: res.data });
      } else {
        dispatch({ type: FETCH_PRODUCT_FAILURE, payload: res.data });
      }
    });
};

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import {
  ADD_TO_CART,
  CLEAR_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from 'src/state/types';

const INITIAL_STATE = {
  error: {},
  products: {},
  totalPages: 1,
  cartTotal: 0,
  selectedProduct: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        error: {},
        products: action.payload.products,
        totalPages: Number(action.payload.totalPages),
      };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, error: action.payload };
    case FETCH_PRODUCT_SUCCESS:
      return { ...state, selectedProduct: action.payload, error: {} };
    case FETCH_PRODUCT_FAILURE:
      return { ...state, error: action.payload };
    case CLEAR_PRODUCTS:
      return {
        ...state,
        error: {},
        cartTotal: 0,
        selectedProduct: null,
      };
    case ADD_TO_CART:
      return {
        ...state,
        error: {},
        cartTotal: state.cartTotal + action.payload,
      };
    default:
      return state;
  }
};

const persistConfig = {
  storage,
  key: 'products',
  blacklist: [],
};

export default persistReducer(persistConfig, authReducer);

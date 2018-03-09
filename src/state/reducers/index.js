import { combineReducers } from 'redux';

import app from './app';
import auth from './auth';
import shop from './shop';

export default combineReducers({
  app,
  auth,
  shop,
});

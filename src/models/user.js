import { Actions } from 'react-native-router-flux';
import API from 'src/services/api';
import DebugConfig from 'src/config/debug';
import FixtureAPI from 'src/services/fixtureApi';
/* eslint-disable no-unused-vars */
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  FETCH_USER_FAILURE,
  SIGNUP_USER_FAILURE,
  SIGNOUT_USER_SUCCESS,
} from 'src/state/types';

/* eslint-disable no-unused-vars */
const api = DebugConfig.useFixtures ? FixtureAPI : API.create();

const responseFailure = (dispatch, type, response) => {
  let message = 'An error occured! Please try again.';
  if (response.problem === 'TIMEOUT_ERROR') {
    message = 'A timeout error occured! Check your internet connection and then try again.';
  } else if (response.problem === 'NETWORK_ERROR') {
    message = 'A network error occured! Check your internet connection and then try again.';
  } else if (response.problem === 'CONNECTION_ERROR') {
    message = 'A connection error occured! Service is currently unavailable. Please try again later.';
  } else if (response.data) {
    dispatch({ type, payload: response.data });
  }

  dispatch({ type, payload: { message } });
};

export const isUserAuthenticated = (dispatch, token) => {
  fetchUserInfo(dispatch, 'dummy.token.yeah');

  // api
  //   .validateToken(token)
  //   .then((res) => {
  //     if (res.ok) {
  //       // fetchUserInfo(dispatch, token);
  //       fetchUserInfo(dispatch, 'dummy.token.yeah');
  //     } else {
  //       const payload = {};
  //       dispatch({ type: FETCH_USER_FAILURE, payload });
  //     } 
  //   });
};

export const signUpUser = (dispatch, data) => {
  signInUser(dispatch, data.email, data.password);
  // const { 
  //   email, username, firstName, lastName, password,
  // } = data;

  // api
  //   .signUpUser(email, username, firstName, lastName, password)
  //   .then((res) => {
  //     if (res.status === 201) {
  //       signInUser(dispatch, email, password);
  //     } else {
  //       responseFailure(dispatch, SIGNUP_USER_FAILURE, res);
  //     }
  //   })
  //   .catch((error) => {
  //     dispatch({ type: SIGNUP_USER_FAILURE, payload: error });
  //   });
};

export const signInUser = (dispatch, email, password) => {
  fetchUserInfo(dispatch, 'dummy.token.yeah');

  // api
  //   .loginUser(email, password)
  //   .then((res) => {
  //     if (res.status === 200) {
  //       fetchUserInfo(dispatch, res.data.token);
  //     } else {
  //       responseFailure(dispatch, LOGIN_USER_FAILURE, res);
  //     }
  //   });
};

export const fetchUserInfo = (dispatch, token) => {
  // if (!DebugConfig.useFixtures) api.setHeader('Authorization', `Bearer ${token}`);

  dispatch({ type: LOGIN_USER_SUCCESS, payload: { token, user: { name: 'Jose' } } });
  // Actions.auth({ type: 'reset' });

  // api
  //   .getUser('edit')
  //   .then((res) => {
  //     if (res.status === 200) {
  //       dispatch({ type: LOGIN_USER_SUCCESS, payload: { token, user: res.data } });
  //       Actions.drawer({ type: 'reset' });
  //     } else {
  //       responseFailure(dispatch, FETCH_USER_FAILURE, res);
  //     }
  //   });
};

export const signOutUser = (dispatch) => {
  // delete the token

  dispatch({ type: SIGNOUT_USER_SUCCESS });
  Actions.auth({ type: 'reset' });
};

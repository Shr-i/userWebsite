import {  call, put, select, takeLatest } from "redux-saga/effects";
import { loadingUserDataFialure, loadingUserDataSuccess, signInUserFailure, signInUserSuccess } from "../Redux/Action/action";
import addUser from "../services/users/addUser";
import fetchUser from "../services/users/fetchUser";
import getUserData from "../services/users/getUserData";

function* signUpUserWorker(action) {
  try {
    const response = yield call(addUser, action.payload);
    console.log('response: ', response);
    yield put({type: "SIGN_UP_SUCCESS", payload: response.data })
  } catch(error) {
    console.log('error: ', error.response.data);
    yield put ({ type: "SIGN_UP_ERROR", payload: error.response.data});
  }
}

function* signInUserWorker(action) {
  try {
    const response = yield call(fetchUser, action.payload);
    yield put(signInUserSuccess(response.data));
  } catch(error) {
    yield put(signInUserFailure(error.response.data));
  }
}

function* getUserDataWorker() {
  try {
    const token = yield select((state) => state.token);
    const response = yield call(getUserData , token);
    yield put(loadingUserDataSuccess(response.data));
  } catch(error) {
    yield put(loadingUserDataFialure(error.response.data));
  }
}

export function* userWatcher() {
  yield takeLatest("SIGN_UP", signUpUserWorker);
  yield takeLatest("SIGN_IN", signInUserWorker);
  yield takeLatest("LOAD_USER_DATA", getUserDataWorker);
}
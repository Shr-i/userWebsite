import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../Redux/Reducers/reducer";
import createSagaMiddleware from "redux-saga";
import { userWatcher } from "../saga/saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: userReducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(userWatcher);
export default store;

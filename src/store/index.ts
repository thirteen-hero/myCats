import { configureStore } from "@reduxjs/toolkit";

import homeReducer from './reducers/home';

const store = configureStore({
  reducer: {
    home: homeReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;

export type RootDispatch = typeof store.dispatch;

export default store;
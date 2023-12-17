import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './slices/user/userSlice';
import baseApi from './apis/baseQuery';

const RootReducers = combineReducers({
  user: userSlice,
  [baseApi.reducerPath]: baseApi.reducer,
});

export default RootReducers;

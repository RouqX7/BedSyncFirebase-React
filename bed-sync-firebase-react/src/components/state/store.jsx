// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import wardReducer from './wardSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    ward: wardReducer,
    // Add other reducers if needed
  },
});

export default store;

import { combineReducers } from '@reduxjs/toolkit';
import blogSlice from './blog/blogSlice';

const rootReducer = combineReducers({
  blog: blogSlice,
});

export default rootReducer;

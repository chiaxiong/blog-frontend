import { combineReducers } from '@reduxjs/toolkit';
import blogSlice from './blogSlice/blogSlice';

const rootReducer = combineReducers({
  blog: blogSlice,
});

export default rootReducer;

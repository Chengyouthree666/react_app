import { combineReducers } from '@reduxjs/toolkit';
import common from './slices/common';

const rootReducer = combineReducers({
  common,
});
export default rootReducer;

import { combineReducers } from '@reduxjs/toolkit';
import { homeReducer } from './home';

const reducer = combineReducers({
  home: homeReducer,
});

export default reducer;

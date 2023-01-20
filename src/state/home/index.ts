import { createSlice } from '@reduxjs/toolkit';
import { HomeState } from './types';

const initialState: HomeState = {};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
});

export const homeReducer = homeSlice.reducer;

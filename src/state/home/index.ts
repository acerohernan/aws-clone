import { createSlice } from '@reduxjs/toolkit';
import { initialWidgetMap } from './data';
import { HomeState } from './types';

const initialState: HomeState = {
  widgetsMap: initialWidgetMap,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
});

export const homeReducer = homeSlice.reducer;

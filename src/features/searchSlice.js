import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    // Definir el estado inicial aquí
  },
  reducers: {
    // Definir las acciones y reducers aquí
  },
});

export const { /* exportar acciones */ } = searchSlice.actions;

export default searchSlice.reducer;

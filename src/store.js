import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './features/searchSlice';
import favouritesReducer from './features/favouritesSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    favourites: favouritesReducer,
  },
});

export default store;

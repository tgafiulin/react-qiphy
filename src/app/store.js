import { configureStore } from '@reduxjs/toolkit';
import giphsReducer from './giphsReducer'

export default configureStore({
  reducer: {
    giphs: giphsReducer
  },
});

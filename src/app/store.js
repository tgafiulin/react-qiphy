import { configureStore } from '@reduxjs/toolkit';
import tagReducer from './tagReducer'

export default configureStore({
  reducer: {
    tags: tagReducer
  },
});

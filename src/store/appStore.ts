import { configureStore } from '@reduxjs/toolkit';
import demoPageReducer from './demoPageSlice';

const appStore = configureStore({
  reducer: {
    demoPage: demoPageReducer,
  },
});

export default appStore;

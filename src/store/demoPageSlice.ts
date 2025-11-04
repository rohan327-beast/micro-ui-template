import { createSlice } from '@reduxjs/toolkit';
import type { DemoModel } from '../models/DemoModel'; // Changed to named import
// Changed to named import
const demoPageSlice = createSlice({
  name: 'demoPage',
  initialState: {
    menus: [] as DemoModel[], // Fixed initialization
  },
  reducers: {
    addDemoPages: (state, action) => {
      state.menus = action.payload; // Spread the payload to add multiple items
    },
  },
});

export const { addDemoPages } = demoPageSlice.actions;

export default demoPageSlice.reducer;

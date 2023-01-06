import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  logoCircleSpeed: 3,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    resetLogoCircleSpeed: (state) => {
      state.logoCircleSpeed = 3;
    },
    setLogoCircleSpeed: (state, action) => {
      if (typeof action.payload !== 'number' && action.payload < 0) {
        throw new Error('【store】invalid payload for logoCircleSpeed');
      }
      state.logoCircleSpeed = action.payload;
    }
  }
});

export const { resetLogoCircleSpeed, setLogoCircleSpeed } = commonSlice.actions;
export default commonSlice.reducer;

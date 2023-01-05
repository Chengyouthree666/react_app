import { createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';

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
        return message.warn('invalid payload for logoCircleSpeed');
      }
      state.logoCircleSpeed = action.payload;
    }
  }
});

export const { resetLogoCircleSpeed, setLogoCircleSpeed } = commonSlice.actions;
export default commonSlice.reducer;

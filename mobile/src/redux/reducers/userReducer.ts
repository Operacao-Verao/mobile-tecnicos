import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    token: '',
  },
  reducers: {
    setUser: (state, action) => {
      const { isLoggedIn, token } = action.payload;
      state.isLoggedIn = isLoggedIn;
      state.token = token;
    },
  },
});

export const { setUser } = slice.actions;
export default slice.reducer;

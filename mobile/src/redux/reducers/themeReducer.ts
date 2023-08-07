import { createSlice } from '@reduxjs/toolkit';

type State = {
	status: 'light' | 'dark';
};

const initialState: State = {
	status: 'dark',
};

export const slice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setThemeStatus: (state, action) => {
			state.status = action.payload;
		},
	},
});

export const { setThemeStatus } = slice.actions;
export default slice.reducer;

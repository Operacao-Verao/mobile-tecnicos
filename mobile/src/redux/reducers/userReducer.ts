import {
	SerializedError,
	createAsyncThunk,
	createSlice,
} from '@reduxjs/toolkit';

import { api } from '../../lib/axios';
import { saveAuthDataToStorage } from '../../utils/useStorage';

type LoginTS = {
	email: string;
	password: string;
};

type State = {
	token: string | null;
	loading: boolean;
	error: SerializedError | null;
};

const initialState: State = {
	token: null,
	loading: false,
	error: null,
};

export const signinResponsible = createAsyncThunk(
	'/login',
	async ({ email, password }: LoginTS) => {
		try {
			const data = { email, password };
			const response = await api.post('login', data);
			const token = response.data.token;

			if (response.status === 200) {
				saveAuthDataToStorage(token);
			} else {
				return 'Erro';
			}
		} catch (error) {
			console.log('Erro na autenticação: ', error);
		}
	}
);

export const slice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setToken: (state, action) => {
			const { token } = action.payload;
			state.token = token;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(signinResponsible.pending, (state) => {
				state.error = null;
				state.loading = true;
			})
			.addCase(signinResponsible.fulfilled, (state) => {
				state.error = null;
				state.loading = false;
			})
			.addCase(signinResponsible.rejected, (state, action) => {
				state.error = action.error;
				state.loading = false;
				state.token = null;
			});
	},
});

export const { setToken } = slice.actions;
export default slice.reducer;

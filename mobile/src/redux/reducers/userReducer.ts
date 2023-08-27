import {
	SerializedError,
	createAsyncThunk,
	createSlice,
} from '@reduxjs/toolkit';

import { api } from '../../lib/axios';

type CredentialTS = {
	token: string | null;
};

type TecnicoTS = {
	id: string;
	nome: string;
	email: string;
};

type LoginTS = {
	username: string;
	password: string;
};

type State = {
	user: TecnicoTS | null;
	token: string | null;
	loading: boolean;
	error: SerializedError | null;
};

const initialState: State = {
	user: null,
	token: null,
	loading: false,
	error: null,
};

export const signinResponsible = createAsyncThunk(
	'/login',
	async ({ username, password }: LoginTS, thunkAPI) => {
		try {
			const data = { username, password };
			const response = await api.post('tecnicos/login', data);
			return response.data.access_token;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response?.data || error.message);
		}
	}
);

export const fetchUserData = createAsyncThunk(
	'/tecnicos/verDados',
	async ({ token }: CredentialTS, thunkAPI) => {
		try {
			const response = await api.get('/tecnicos/verDados', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			return response.data;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response?.data || error.message);
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
			.addCase(signinResponsible.fulfilled, (state, action: any) => {
				state.error = null;
				state.loading = false;
				state.token = action.payload;
			})
			.addCase(signinResponsible.rejected, (state, action) => {
				state.error = action.error;
				state.loading = false;
				state.token = null;
			})
			.addCase(fetchUserData.pending, (state) => {
				state.error = null;
				state.loading = true;
			})
			.addCase(fetchUserData.fulfilled, (state, action: any) => {
				state.error = null;
				state.loading = false;
				state.user = action.payload;
			})
			.addCase(fetchUserData.rejected, (state, action) => {
				state.error = action.error;
				state.loading = false;
			});
	},
});

export const { setToken } = slice.actions;
export default slice.reducer;

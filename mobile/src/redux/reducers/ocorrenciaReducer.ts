import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { api } from '../../lib/axios';
import { OcorrenciaTS } from '../../types/Ocorrencia';

type CredentialsTS = {
	token: string;
	id?: FormData;
};

const initialState: OcorrenciaTS = {
	acionamento: '',
	data: null,
	num_casas: 0,
	relato: '',
	status: '',
	relatorio: undefined,
};

export const fetchOcorrencias = createAsyncThunk(
	'ocorrencias/ver',
	async ({ token }: CredentialsTS) => {
		try {
			const response = await api.get('ocorrencias/ver', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (response.status === 200) {
				let ocorrencias = response.data;
				return ocorrencias;
			}
		} catch (error) {
			return 'Erro: ' + error;
		}
	}
);

export const fetchOneOcorrencia = createAsyncThunk(
	'ocorrencias/ver/{id}',
	async ({ id, token }: CredentialsTS) => {
		try {
			const response = await api.get(`ocorrencias/ver/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (response.status === 200) {
				let ocorrencia = response.data;
				return ocorrencia;
			}
		} catch (error) {
			return 'Erro: ' + error;
		}
	}
);

export const slice = createSlice({
	name: 'ocorrencia',
	initialState,
	reducers: {},
});

export default slice.reducer;

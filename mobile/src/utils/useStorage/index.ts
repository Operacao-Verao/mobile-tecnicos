import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '../../redux/hooks/useApp';
import { setToken } from '../../redux/reducers/userReducer';

export const saveAuthDataToStorage = async (token: string) => {
	try {
		await AsyncStorage.setItem('userToken', token);
	} catch (error) {
		console.log('Erro ao salvar os dados.', error);
	}
};

export const getAuthDataFromStorage = async () => {
	try {
		const token = await AsyncStorage.getItem('userToken');
		return { token };
	} catch (error) {
		console.log('Erro ao pegar os dados.', error);
	}
};

export const dropAuthDataFromStorage = async () => {
	const dispatch = useAppDispatch();
	try {
		await AsyncStorage.removeItem('userToken');
		dispatch(setToken(null));
		console.log(AsyncStorage.getItem('userToken'));
	} catch (error) {
		console.log('Erro ao fazer logout.', error);
	}
};

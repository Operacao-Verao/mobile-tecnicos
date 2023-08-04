import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveAuthDataToStorage = async (
	token: string,
) => {
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

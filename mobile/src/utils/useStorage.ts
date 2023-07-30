import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveAuthDataToStorage = async (token: string, isLoggedIn: boolean) => {
  try {
    await AsyncStorage.setItem('userToken', token);
    await AsyncStorage.setItem('isLoggedIn', isLoggedIn ? 'true' : 'false');
  } catch (error) {
    console.log('Erro ao salvar os dados.', error);
  }
};

export const getAuthDataFromStorage = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    const isLoggedIn = (await AsyncStorage.getItem('isLoggedIn')) === 'true';
    return { token, isLoggedIn };
  } catch (error) {
    console.log('Erro ao pegar os dados.', error);
  }
};

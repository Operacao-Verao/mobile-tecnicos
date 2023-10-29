import React, { useEffect } from 'react';
import { fetchUserData, setToken } from '../../redux/reducers/userReducer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/useApp';
import { setThemeStatus } from '../../redux/reducers/themeReducer';
import SettingsItem from '../../components/SettingsItem';
import { Feather } from '@expo/vector-icons';
import * as S from './styles';
import { dropAuthDataFromStorage } from '../../utils/useStorage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../Routes/tab.routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Config = () => {
	const dispatch = useAppDispatch();
	const theme = useAppSelector((state) => state.theme);
	const user = useAppSelector((state) => state.user);
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams, 'login'>>();

	const handleModeToggle = () => {
		dispatch(setThemeStatus(theme.status === 'dark' ? 'light' : 'dark'));
	};

	const handleLoggout = async () => {
		try {
			await AsyncStorage.removeItem('userToken');
			dispatch(setToken(null));
			console.log('Token: ', AsyncStorage.getItem('userToken'));
		} catch (error) {
			console.log('Erro ao fazer logout.', error);
		}
	};

	useEffect(() => {
		const getUserData = () => {
			dispatch(fetchUserData({ token: user.token }));
		};
		getUserData();
	}, []);

	return (
		<S.Container>
			<S.TopBar>
				<S.Title>Configurações</S.Title>
				<S.ButtonMode onPress={handleModeToggle}>
					<Feather
						name={theme.status === 'dark' ? 'moon' : 'sun'}
						size={24}
						color={theme.status === 'dark' ? 'white' : 'black'}
					/>
				</S.ButtonMode>
			</S.TopBar>

			<S.SettingsAccount>
				<SettingsItem
					FeatherIcon
					ItemIconFeather="user"
					ItemTitle={user.user?.nome}
					ItemSubtitle={user.user?.email}
					IconColor={theme.status === 'dark' ? 'white' : 'black'}
				/>
			</S.SettingsAccount>
			<S.SettingsButton onPress={handleLoggout}>
				<SettingsItem
					hasRight
					ItemIcon="logout"
					ItemTitle="Sair"
					ItemSubtitle="Desconectar da conta atual"
					IconColor={theme.status === 'dark' ? 'white' : 'black'}
				/>
			</S.SettingsButton>
		</S.Container>
	);
};

export default Config;

import React, { useEffect } from 'react';
import { fetchUserData, setToken } from '../../redux/reducers/userReducer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/useApp';
import { setThemeStatus } from '../../redux/reducers/themeReducer';
import SettingsItem from '../../components/SettingsItem';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import * as S from './styles';
import { dropAuthDataFromStorage } from '../../utils/useStorage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../Routes/tab.routes';

const Config = () => {
	const dispatch = useAppDispatch();
	const theme = useAppSelector((state) => state.theme);
	const user = useAppSelector((state) => state.user);

	const handleModeToggle = () => {
		dispatch(setThemeStatus(theme.status === 'dark' ? 'light' : 'dark'));
	};

	const handleLoggout = async () => {
		try {
			dispatch(setToken(''));
			console.log(user.token);
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
			<S.Button onPress={handleLoggout}>
				<S.Icon>
					<MaterialIcons
						name={'logout'}
						size={24}
						color={theme.status === 'dark' ? 'white' : 'black'}
					/>
				</S.Icon>
				<S.Content>
					<S.TextContent>
						<S.ItemTitle>{'Sair'}</S.ItemTitle>
						<S.ItemSubtitle>{'Desconectar da conta atual'}</S.ItemSubtitle>
					</S.TextContent>
					<MaterialIcons
						name="chevron-right"
						size={24}
						color={theme.status === 'dark' ? 'white' : 'black'}
					/>
				</S.Content>
			</S.Button>
		</S.Container>
	);
};

export default Config;

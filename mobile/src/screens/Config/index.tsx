import React, { useEffect } from 'react';
import { fetchUserData } from '../../redux/reducers/userReducer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/useApp';
import { setThemeStatus } from '../../redux/reducers/themeReducer';
import SettingsItem from '../../components/SettingsItem';
import { Feather } from '@expo/vector-icons';
import * as S from './styles';

const Config = () => {
	const dispatch = useAppDispatch();
	const theme = useAppSelector((state) => state.theme);
	const user = useAppSelector((state) => state.user);
	const handleModeToggle = async () => {
		dispatch(setThemeStatus(theme.status === 'dark' ? 'light' : 'dark'));
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
			<S.Settings>
				<SettingsItem
					hasRight
					ItemIcon="logout"
					ItemTitle="Sair"
					ItemSubtitle="Desconectar da conta atual"
					IconColor={theme.status === 'dark' ? 'white' : 'black'}
				/>
			</S.Settings>
		</S.Container>
	);
};

export default Config;

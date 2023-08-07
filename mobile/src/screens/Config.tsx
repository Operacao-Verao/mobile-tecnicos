import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import SettingsItem from '../components/SettingsItem';
import { Feather } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '../redux/hooks/useApp';
import { setThemeStatus } from '../redux/reducers/themeReducer';

const Config = () => {
	const dispatch = useAppDispatch();
	const theme = useAppSelector((state) => state.theme);
	const user = useAppSelector((state) => state.user);

	const handleModeToggle = async () => {
		dispatch(setThemeStatus(theme.status === 'dark' ? 'light' : 'dark'));
	};

	return (
		<ScrollView className="flex-1 bg-darkBackground p-5">
			<View className="flex-row justify-between">
				<Text className="text-2xl text-darkTextColor">Configurações</Text>
				<TouchableOpacity onPress={handleModeToggle} className="justify-center">
					<Feather
						name={theme.status === 'dark' ? 'moon' : 'sun'}
						size={24}
						color="white"
					/>
				</TouchableOpacity>
			</View>

			<View className="mt-5">
				<SettingsItem
					ItemIcon="logout"
					ItemTitle="Sair"
					ItemSubtitle="Desconectar da conta atual"
				/>
				<SettingsItem
					ItemIcon="logout"
					ItemTitle="Sair"
					ItemSubtitle="Desconectar da conta atual"
				/>
			</View>
		</ScrollView>
	);
};

export default Config;

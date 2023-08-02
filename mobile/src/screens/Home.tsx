import { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { getAuthDataFromStorage } from '../utils/useStorage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../Routes/tab.routes';
import { Ocorrencia } from '../components/Ocorrencia';

const Home = () => {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams, 'home'>>();

	useEffect(() => {
		const fetchAuthData = async () => {
			const authData = await getAuthDataFromStorage();
			if (!authData?.token) {
				navigation.navigate('bottomBar', { screen: 'login' });
			}
		};

		fetchAuthData();
	}, []);

	return (
		<ScrollView className="flex-1 bg-white">
			<View className="p-6">
				<Text className="font-bold text-2xl text-center mb-4">
					Ocorrências Recentes
				</Text>
					<Ocorrencia
						acionamento={'acionamento'}
						relato={
							'Enchente na vilinha com deslizamento em duas casas no mesmo número'
						}
						num_casas={3}
						status={'Em Aberto'}
						data={'20/05/2023'}
					/>
					<Ocorrencia
						acionamento={'acionamento'}
						relato={
							'Enchente na vilinha com deslizamento em duas casas no mesmo número'
						}
						num_casas={3}
						status={'Em Aberto'}
						data={'20/05/2023'}
					/>
					<Ocorrencia
						acionamento={'acionamento'}
						relato={
							'Enchente na vilinha com deslizamento em duas casas no mesmo número'
						}
						num_casas={3}
						status={'Em Aberto'}
						data={'20/05/2023'}
					/>
					<Ocorrencia
						acionamento={'acionamento'}
						relato={
							'Enchente na vilinha com deslizamento em duas casas no mesmo número'
						}
						num_casas={3}
						status={'Em Aberto'}
						data={'20/05/2023'}
					/>
			</View>
		</ScrollView>
	);
};

export default Home;

import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Status from '../components/Status';
import { useAppSelector } from '../redux/hooks/useAppSelector';
import { Loading } from '../components/Loading';

const OcorrenciaScreen = () => {
	const loading = useAppSelector((state) => state.ocorrencia.loading);
	const state = useAppSelector((state) => state.ocorrencia.ocorrencia);

	if (loading) {
		return <Loading />;
	}

	return (
		<ScrollView className="flex-1 bg-white p-5">
			<View>
				<View className="flex-row justify-between items-center">
					<Text className="text-base text-slate-500 border border-slate-400 rounded-full px-2 py-1">
						20/05/2023
					</Text>
					<Status />
				</View>
				<Text className="text-lg">Civil: Samantha Zduniak</Text>
				<Text className="text-base">
					Endereço: Av. Sete de Setembro, 38 Centro, Franco da Rocha - SP
				</Text>
				<Text className="text-base">Relato: </Text>
				<Text className="text-sm">{state.relato}</Text>
			</View>
			{state.relatorio && (
				<View>
					<Text className="text-2xl font-semibold">Relatório</Text>
				</View>
			)}
		</ScrollView>
	);
};

export default OcorrenciaScreen;

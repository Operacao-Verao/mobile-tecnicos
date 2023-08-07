import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useAppSelector } from '../redux/hooks/useApp';
import { Loading } from '../components/Loading';
import { OpenStatus } from '../components/Status';
import RelatorioComponent from '../components/RelatorioComponent';

const OcorrenciaScreen = () => {
	const loading = useAppSelector((state) => state.ocorrencia.loading);
	const state = useAppSelector((state) => state.ocorrencia.ocorrencia);

	if (loading) {
		return <Loading />;
	}

	return (
		<ScrollView className="flex-1 bg-darkBackground p-5">
			<View className="space-y-4">
				<View className="flex-row justify-between items-center">
					<Text className="text-slate-100 text-base border-[1.5px] border-slate-400 rounded-full px-3 py-1">
						20/05/2023
					</Text>
					<OpenStatus status={state.status} />
				</View>
				<View className="space-y-4 border-[1.5px] border-slate-400 rounded-2xl p-3">
					<View>
						<Text className="text-slate-100 text-base font-semibold">
							Civil:{' '}
						</Text>
						<Text className="text-slate-100 text-sm">Samantha Zduniak</Text>
					</View>
					<View>
						<Text className="text-slate-100 text-base font-semibold">
							Endereço:
						</Text>
						<Text className="text-slate-100 text-sm">
							Av. Sete de Setembro, 38 Centro, Franco da Rocha - SP
						</Text>
					</View>
					<View>
						<Text className="text-slate-100 text-base font-semibold">
							Relato:{' '}
						</Text>
						<Text className="text-slate-100 text-sm">{state.relato}</Text>
					</View>
				</View>
			</View>
			{state.relatorio && <RelatorioComponent />}
		</ScrollView>
	);
};

export default OcorrenciaScreen;

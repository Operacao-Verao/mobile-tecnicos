import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/useApp';
import * as S from './styles';
import BackButton from '../../components/BackButton';
import RelatorioComponent from '../../components/RelatorioComponent';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../Routes/tab.routes';
import { fetchOneRelatorio } from '../../redux/reducers/relatorioReducer';
import { Loading } from '../../components/Loading';

type Props = {
	idCasa: number;
};

const CasasScreen = () => {
	const dispatch = useAppDispatch();
	const token = useAppSelector((state) => state.user.token);
	const casaId = useAppSelector((state) => state.ocorrencia.casaAberta);
	const relatorios = useAppSelector((state) => state.relatorio.relatorios);
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams, 'relatorio'>>();

	useEffect(() => {
		dispatch(fetchOneRelatorio({ token: token, casaId: casaId }));
	}, []);

	const handleRelatorio = () => {
		navigation.navigate('relatorio');
	};
	
	return (
		<S.Container>
			<S.RowWTBetween>
				<BackButton />
				<S.Label>Casa</S.Label>
			</S.RowWTBetween>
			{relatorios?.map((item, index) => (
				<RelatorioComponent
					key={index}
					index={index}
					relatorio={{
						casa_id: item.casa_id,
						ocorrencia_id: item.ocorrencia_id,
						enfermos: item.enfermos,
						interdicao: item.interdicao,
						situacaoVitimas: item.situacaoVitimas,
						gravidade: item.gravidade,
						relatorio: item.relatorio,
						encaminhamento: item.encaminhamento,
						memorando: item.memorando,
						oficio: item.oficio,
						processo: item.processo,
						assunto: item.assunto,
						observacoes: item.observacoes,
						areaAfetada: item.areaAfetada,
						tipoConstrucao: item.tipoConstrucao,
						tipoTalude: item.tipoTalude,
						vegetacao: item.vegetacao,
						danosMateriais: item.danosMateriais,
						dataGeracao: item.dataGeracao,
						dataAtendimento: item.dataAtendimento,
						afetados: {
							adultos: item.afetados?.adultos,
							criancas: item.afetados?.criancas,
							enfermos: item.afetados?.enfermos,
							especiais: item.afetados?.especiais,
							feridos: item.afetados?.feridos,
							idosos: item.afetados?.idosos,
							mortos: item.afetados?.mortos,
						},
						animais: {
							aves: item.animais?.aves,
							caes: item.animais?.caes,
							equinos: item.animais?.equinos,
							gatos: item.animais?.gatos,
						},
						dadosVistoria: {
							desmoronamento: item.dadosVistoria.desmoronamento,
							deslizamento: item.dadosVistoria.deslizamento,
							esgoto_escoamento: item.dadosVistoria.esgoto_escoamento,
							erosao: item.dadosVistoria.erosao,
							inundacao: item.dadosVistoria.inundacao,
							incendio: item.dadosVistoria.incendio,
							arvores: item.dadosVistoria.arvores,
							infiltracao_trinca: item.dadosVistoria.infiltracao_trinca,
							judicial: item.dadosVistoria.judicial,
							monitoramento: item.dadosVistoria.monitoramento,
							transito: item.dadosVistoria.transito,
						},
						fotos: item.fotos.map((foto) => ({
							url: foto.url,
						})),
					}}
				/>
			))}
			<S.Button onPress={handleRelatorio}>
				<S.ButtonText>Criar Relatório</S.ButtonText>
			</S.Button>
		</S.Container>
	);
};

export default CasasScreen;

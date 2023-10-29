import React from 'react';

import { RootStackParams } from '../../Routes/tab.routes';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/useApp';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { OpenStatus } from '../../components/Status';
import BackButton from '../../components/BackButton';
import RelatorioComponent from '../../components/RelatorioComponent';
import { Loading } from '../../components/Loading';
import { useFormattedDate } from '../../utils';
import * as S from './styles';
import CasasComponent from '../../components/CasasComponent';

const OcorrenciaScreen = () => {
	const dispatch = useAppDispatch();
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParams, 'relatorio'>>();
	const loading = useAppSelector((state) => state.ocorrencia.loading);
	const ocorrencia = useAppSelector((state) => state.ocorrencia.ocorrencia);
	const casas = useAppSelector(
		(state) => state.ocorrencia.ocorrencia.endereco.casas
	);
	const date = useFormattedDate(ocorrencia.data);

	const handleCreate = () => {
		navigation.navigate('relatorio');
	};

	if (loading) {
		return <Loading />;
	}

	return (
		<S.Container>
			<S.OcorrenciaWrapper>
				<BackButton />
				<S.Row>
					<S.RowWTBetween>
						<S.Date>{date}</S.Date>
					</S.RowWTBetween>
					<OpenStatus status={ocorrencia.status} />
				</S.Row>
				<S.Ocorrencia>
					<S.Column>
						<S.Label>Endereço:</S.Label>
						<S.Info>
							{ocorrencia.endereco.rua}, {ocorrencia.endereco.bairro},{' '}
							{ocorrencia.endereco.cidade} - {ocorrencia.endereco.numero}
						</S.Info>
						<S.Info>{ocorrencia.endereco.cep}</S.Info>
					</S.Column>
					<S.Column>
						<S.Label>Casas Afetadas:</S.Label>
						<S.Info>{ocorrencia.num_casas}</S.Info>
					</S.Column>
				</S.Ocorrencia>
			</S.OcorrenciaWrapper>
			<S.CasasText>
				<S.Label>Casas Afetadas</S.Label>
				<S.Info>(Clique em uma casa para visualizar)</S.Info>
			</S.CasasText>
			{casas.map((item, index) => (
				<CasasComponent
					key={item.id}
					id={item.id}
					index={index}
					complemento={item.complemento}
					interdicao={item.interdicao}
				/>
			))}
			{ocorrencia.relatorios?.map((item, index) => (
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
						afetados: item.afetados,
						animais: item.animais,
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
						fotos: [
							{
								url: item.fotos[0].url,
							},
						],
					}}
				/>
			))}
		</S.Container>
	);
};

export default OcorrenciaScreen;

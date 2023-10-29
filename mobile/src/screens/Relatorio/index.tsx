import React, { useState } from 'react';
import { Alert, Image } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { schemaRelatorio, useFormattedDate } from '../../utils';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import {
	MultipleSelectList,
	SelectList,
} from 'react-native-dropdown-select-list';
import DateTimePicker, {
	DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

import {
	dataAreaAfetada,
	dataInterdicao,
	dataSituacao,
	dataTipoConstrucao,
	dataTipoTalude,
	dataVegetacao,
	dataVistoria,
} from '../../constants';
import { Input } from '../../components/Input';
import * as S from './styles';
import { RelatorioTS } from '../../types/Relatorio';
import Checkbox from 'expo-checkbox';
import { createRelatorio } from '../../redux/reducers/relatorioReducer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/useApp';
import { AndroidMode } from '../../types/AndroidMode';
import { formatDateToString } from '../../utils/useFormattedDate';
import { api } from '../../lib/axios';

const RelatorioScreen = () => {
	const dispatch = useAppDispatch();
	const token = useAppSelector((state) => state.user.token);
	const relatorio = useAppSelector((state) => state.relatorio.relatorio);
	const ocorrenciaId = useAppSelector(
		(state) => state.ocorrencia.ocorrencia.id
	);
	const [selectedVistoria, setSelectedVistoria] = useState('');
	const [selectedImageUri, setSelectedImageUri] = useState('');
	const [selectedAreaAfetada, setSelectedAreaAfetada] = useState(0);
	const [selectedTipoConstrucao, setSelectedTipoConstrucao] = useState(0);
	const [selectedTipoTalude, setSelectedTipoTalude] = useState(0);
	const [selectedSituacao, setSelectedSituacao] = useState(0);
	const [selectedVegetacao, setSelectedVegetacao] = useState(0);
	const [selectedInterdicao, setSelectedInterdicao] = useState(0);
	const [selectedDanos, setSelectedDanos] = useState(false);
	const [date, setDate] = useState<Date>(new Date());
	const [mode, setMode] = useState<AndroidMode>('date');
	const [show, setShow] = useState(false);

	const onChangeDate = (
		event: DateTimePickerEvent,
		selectedDate: Date | undefined
	) => {
		const currentDate = selectedDate;
		setShow(false);
		currentDate && setDate(currentDate);
	};

	const showMode = (currentMode: AndroidMode) => {
		setShow(true);
		setMode(currentMode);
	};

	const showDatepicker = () => {
		showMode('date');
	};

	const showTimepicker = () => {
		showMode('time');
	};

	async function handleSelectImage() {
		try {
			const { status } = await ImagePicker.requestCameraPermissionsAsync();
			if (status !== ImagePicker.PermissionStatus.GRANTED) {
				return Alert.alert(
					'É necessário conceder permissão para acessar seu álbum!'
				);
			}

			const response = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsMultipleSelection: true,
				aspect: [9, 16],
				quality: 1,
			});

			if (response.canceled) {
				return;
			}

			if (!response.canceled) {
				const imgManipuled = await ImageManipulator.manipulateAsync(
					response.assets[0].uri,
					[{ resize: { width: 900 } }],
					{
						compress: 1,
						format: ImageManipulator.SaveFormat.JPEG,
						base64: true,
					}
				);

				setSelectedImageUri(imgManipuled.uri);
			}
		} catch (error) {
			console.log(error);
		}
	}

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schemaRelatorio) });

	const onSubmit: SubmitHandler<RelatorioTS> = async (data: RelatorioTS) => {
		if (selectedVistoria) {
			data.dadosVistoria = {
				desmoronamento: selectedVistoria.includes('desmoronamento'),
				deslizamento: selectedVistoria.includes('deslizamento'),
				esgoto_escoamento: selectedVistoria.includes('esgoto_escoamento'),
				erosao: selectedVistoria.includes('erosao'),
				inundacao: selectedVistoria.includes('inundacao'),
				incendio: selectedVistoria.includes('incendio'),
				arvores: selectedVistoria.includes('arvores'),
				infiltracao_trinca: selectedVistoria.includes('infiltracao_trinca'),
				judicial: selectedVistoria.includes('judicial'),
				monitoramento: selectedVistoria.includes('monitoramento'),
				transito: selectedVistoria.includes('transito'),
			};
		}
		data.danosMateriais = selectedDanos;
		data.interdicao = selectedInterdicao;
		data.enfermos = data.afetados?.enfermos;
		data.areaAfetada = selectedAreaAfetada;
		data.tipoConstrucao = selectedTipoConstrucao;
		data.tipoTalude = selectedTipoTalude;
		data.situacaoVitimas = selectedSituacao;
		data.vegetacao = selectedVegetacao;
		data.dataGeracao = formatDateToString(new Date());
		data.dataAtendimento = formatDateToString(date);
		data.ocorrencia_id = ocorrenciaId;
		data.casa_id = relatorio.casa_id;
		data.fotos = [
			{
				url: selectedImageUri,
			},
		];
		data.gravidade = 1;

		try {
			// await dispatch(
			// 	createRelatorio({
			// 		token: token,
			// 		body: data,
			// 	})
			// ).unwrap();
			// console.log(ocorrenciaId);

			const response = await api.post(`relatorios/criar/`, data, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			return response.data;
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<S.Container>
			<S.Wrapper>
				<S.Title>Criar Relatório</S.Title>
				<Controller
					control={control}
					name="fotos.url"
					render={({ field: { onChange } }) => (
						<S.ButtonImage onPress={handleSelectImage}>
							{selectedImageUri ? (
								<S.ButtonTextImage>Imagens salvas</S.ButtonTextImage>
							) : (
								<S.ButtonTextImage>Selecionar foto</S.ButtonTextImage>
							)}
						</S.ButtonImage>
					)}
				/>
				<S.Form>
					<S.Label>Memorando</S.Label>
					<Controller
						control={control}
						name="memorando"
						render={({ field: { onChange } }) => (
							<Input.Root>
								<Input.Input placeholderText="Ex.: 05355" onChange={onChange} />
								<Input.ErrorText ErrorText={errors.memorando?.message} />
							</Input.Root>
						)}
					/>
					<S.Label>Dados da Vistoria</S.Label>
					<Controller
						control={control}
						name="dadosVistoria"
						render={({ field: { onChange } }) => (
							<MultipleSelectList
								setSelected={(val: string) => setSelectedVistoria(val)}
								data={dataVistoria}
								save="key"
								label="Dados da Vistoria"
								fontFamily="Poppins_400Regular"
								placeholder="Dados da Vistoria"
								boxStyles={{ backgroundColor: 'white' }}
								dropdownTextStyles={{ color: '#94a3b8' }}
							/>
						)}
					/>
					<S.Label>Assunto</S.Label>
					<Controller
						control={control}
						name="assunto"
						render={({ field: { onChange } }) => (
							<Input.Root>
								<Input.Input onChange={onChange} multiline numberOfLines={4} />
								<Input.ErrorText ErrorText={errors.assunto?.message} />
							</Input.Root>
						)}
					/>
					<S.Row>
						<S.Column>
							<S.Label>Área Afetada</S.Label>
							<Controller
								control={control}
								name="areaAfetada"
								render={({ field: { onChange } }) => (
									<SelectList
										setSelected={setSelectedAreaAfetada}
										data={dataAreaAfetada}
										save="key"
										search={false}
										fontFamily="Poppins_400Regular"
										placeholder="Área Afetada"
										boxStyles={{ backgroundColor: 'white' }}
										dropdownTextStyles={{ color: '#94a3b8' }}
									/>
								)}
							/>
						</S.Column>
						<S.Column>
							<S.Label>Tipo Construção</S.Label>
							<Controller
								control={control}
								name="tipoConstrucao"
								render={({ field: { onChange } }) => (
									<SelectList
										setSelected={setSelectedTipoConstrucao}
										data={dataTipoConstrucao}
										save="key"
										search={false}
										fontFamily="Poppins_400Regular"
										placeholder="Tipo Construção"
										boxStyles={{ backgroundColor: 'white' }}
										dropdownTextStyles={{ color: '#94a3b8' }}
									/>
								)}
							/>
						</S.Column>
						<S.Column>
							<S.Label>Tipo Talude</S.Label>
							<Controller
								control={control}
								name="tipoTalude"
								render={({ field: { onChange } }) => (
									<SelectList
										setSelected={setSelectedTipoTalude}
										data={dataTipoTalude}
										save="key"
										search={false}
										fontFamily="Poppins_400Regular"
										placeholder="Tipo Talude"
										boxStyles={{ backgroundColor: 'white' }}
										dropdownTextStyles={{ color: '#94a3b8' }}
									/>
								)}
							/>
						</S.Column>
						<S.Column>
							<S.Label>Interdição</S.Label>
							<Controller
								control={control}
								name="interdicao"
								render={({ field: { onChange } }) => (
									<SelectList
										setSelected={setSelectedInterdicao}
										data={dataInterdicao}
										save="key"
										search={false}
										fontFamily="Poppins_400Regular"
										placeholder="Interdição"
										boxStyles={{ backgroundColor: 'white' }}
										dropdownTextStyles={{ color: '#94a3b8' }}
									/>
								)}
							/>
						</S.Column>
					</S.Row>
					<S.Column>
						<S.Label>Afetados</S.Label>
						<S.Row>
							<S.Column>
								<S.SmallLabel>Adultos</S.SmallLabel>
								<Controller
									control={control}
									name="afetados.adultos"
									render={({ field: { onChange } }) => (
										<Input.Root>
											<Input.Input onChange={onChange} keyboardType="numeric" />
											<Input.ErrorText
												ErrorText={errors.afetados?.adultos?.message}
											/>
										</Input.Root>
									)}
								/>
							</S.Column>
							<S.Column>
								<S.SmallLabel>Crianças</S.SmallLabel>
								<Controller
									control={control}
									name="afetados.criancas"
									render={({ field: { onChange } }) => (
										<Input.Root>
											<Input.Input onChange={onChange} keyboardType="numeric" />
											<Input.ErrorText
												ErrorText={errors.afetados?.criancas?.message}
											/>
										</Input.Root>
									)}
								/>
							</S.Column>
							<S.Column>
								<S.SmallLabel>Idosos</S.SmallLabel>
								<Controller
									control={control}
									name="afetados.idosos"
									render={({ field: { onChange } }) => (
										<Input.Root>
											<Input.Input onChange={onChange} keyboardType="numeric" />
											<Input.ErrorText
												ErrorText={errors.afetados?.idosos?.message}
											/>
										</Input.Root>
									)}
								/>
							</S.Column>
							<S.Column>
								<S.SmallLabel>Especiais</S.SmallLabel>
								<Controller
									control={control}
									name="afetados.especiais"
									render={({ field: { onChange } }) => (
										<Input.Root>
											<Input.Input onChange={onChange} keyboardType="numeric" />
											<Input.ErrorText
												ErrorText={errors.afetados?.especiais?.message}
											/>
										</Input.Root>
									)}
								/>
							</S.Column>
							<S.Column>
								<S.SmallLabel>Mortos</S.SmallLabel>
								<Controller
									control={control}
									name="afetados.mortos"
									render={({ field: { onChange } }) => (
										<Input.Root>
											<Input.Input onChange={onChange} keyboardType="numeric" />
											<Input.ErrorText
												ErrorText={errors.afetados?.mortos?.message}
											/>
										</Input.Root>
									)}
								/>
							</S.Column>
							<S.Column>
								<S.SmallLabel>Feridos</S.SmallLabel>
								<Controller
									control={control}
									name="afetados.feridos"
									render={({ field: { onChange } }) => (
										<Input.Root>
											<Input.Input onChange={onChange} keyboardType="numeric" />
											<Input.ErrorText
												ErrorText={errors.afetados?.feridos?.message}
											/>
										</Input.Root>
									)}
								/>
							</S.Column>
							<S.Column>
								<S.SmallLabel>Enfermos</S.SmallLabel>
								<Controller
									control={control}
									name="afetados.enfermos"
									render={({ field: { onChange } }) => (
										<Input.Root>
											<Input.Input onChange={onChange} keyboardType="numeric" />
											<Input.ErrorText
												ErrorText={errors.afetados?.enfermos?.message}
											/>
										</Input.Root>
									)}
								/>
							</S.Column>
						</S.Row>
					</S.Column>
					<S.Column>
						<S.Label>Animais</S.Label>
						<S.Row>
							<S.Column>
								<S.SmallLabel>Cães</S.SmallLabel>
								<Controller
									control={control}
									name="animais.caes"
									render={({ field: { onChange } }) => (
										<Input.Root>
											<Input.Input onChange={onChange} keyboardType="numeric" />
											<Input.ErrorText
												ErrorText={errors.animais?.caes?.message}
											/>
										</Input.Root>
									)}
								/>
							</S.Column>
							<S.Column>
								<S.SmallLabel>Gatos</S.SmallLabel>
								<Controller
									control={control}
									name="animais.gatos"
									render={({ field: { onChange } }) => (
										<Input.Root>
											<Input.Input onChange={onChange} keyboardType="numeric" />
											<Input.ErrorText
												ErrorText={errors.animais?.gatos?.message}
											/>
										</Input.Root>
									)}
								/>
							</S.Column>
							<S.Column>
								<S.SmallLabel>Aves</S.SmallLabel>
								<Controller
									control={control}
									name="animais.aves"
									render={({ field: { onChange } }) => (
										<Input.Root>
											<Input.Input onChange={onChange} keyboardType="numeric" />
											<Input.ErrorText
												ErrorText={errors.animais?.aves?.message}
											/>
										</Input.Root>
									)}
								/>
							</S.Column>
							<S.Column>
								<S.SmallLabel>Equinos</S.SmallLabel>
								<Controller
									control={control}
									name="animais.equinos"
									render={({ field: { onChange } }) => (
										<Input.Root>
											<Input.Input onChange={onChange} keyboardType="numeric" />
											<Input.ErrorText
												ErrorText={errors.animais?.equinos?.message}
											/>
										</Input.Root>
									)}
								/>
							</S.Column>
						</S.Row>
					</S.Column>
					<S.Row>
						<S.Column>
							<S.Label>Situação</S.Label>
							<Controller
								control={control}
								name="situacaoVitimas"
								render={({ field: { onChange } }) => (
									<SelectList
										setSelected={setSelectedSituacao}
										data={dataSituacao}
										save="key"
										search={false}
										fontFamily="Poppins_400Regular"
										placeholder="Situação"
										boxStyles={{ backgroundColor: 'white' }}
										dropdownTextStyles={{ color: '#94a3b8' }}
									/>
								)}
							/>
						</S.Column>
						<S.Column>
							<S.Label>Vegetação</S.Label>
							<Controller
								control={control}
								name="vegetacao"
								render={({ field: { onChange } }) => (
									<SelectList
										setSelected={setSelectedVegetacao}
										data={dataVegetacao}
										save="key"
										search={false}
										fontFamily="Poppins_400Regular"
										placeholder="Vegetação"
										boxStyles={{ backgroundColor: 'white' }}
										dropdownTextStyles={{ color: '#94a3b8' }}
									/>
								)}
							/>
						</S.Column>
					</S.Row>
					<S.Column>
						<S.Label>Ofício</S.Label>
						<Controller
							control={control}
							name="oficio"
							render={({ field: { onChange } }) => (
								<Input.Root>
									<Input.Input onChange={onChange} />
									<Input.ErrorText ErrorText={errors.oficio?.message} />
								</Input.Root>
							)}
						/>
					</S.Column>
					<S.Column>
						<S.Label>Encaminhamento</S.Label>
						<Controller
							control={control}
							name="encaminhamento"
							render={({ field: { onChange } }) => (
								<Input.Root>
									<Input.Input onChange={onChange} />
									<Input.ErrorText ErrorText={errors.encaminhamento?.message} />
								</Input.Root>
							)}
						/>
					</S.Column>
					<S.Column>
						<S.Label>Observações</S.Label>
						<Controller
							control={control}
							name="observacoes"
							render={({ field: { onChange } }) => (
								<Input.Root>
									<Input.Input onChange={onChange} />
									<Input.ErrorText ErrorText={errors.observacoes?.message} />
								</Input.Root>
							)}
						/>
					</S.Column>
					<S.Column>
						<S.Label>Relatório</S.Label>
						<Controller
							control={control}
							name="relatorio"
							render={({ field: { onChange } }) => (
								<Input.Root>
									<Input.Input onChange={onChange} />
									<Input.ErrorText ErrorText={errors.relatorio?.message} />
								</Input.Root>
							)}
						/>
					</S.Column>
					<S.Column>
						<S.Label>Processo</S.Label>
						<Controller
							control={control}
							name="processo"
							render={({ field: { onChange } }) => (
								<Input.Root>
									<Input.Input onChange={onChange} />
									<Input.ErrorText ErrorText={errors.processo?.message} />
								</Input.Root>
							)}
						/>
					</S.Column>
					<S.Column>
						<S.Label>Danos Materiais</S.Label>
						<Controller
							control={control}
							name="danosMateriais"
							render={({ field: { onChange } }) => (
								<Checkbox
									value={selectedDanos}
									onValueChange={setSelectedDanos}
									style={{
										marginLeft: 5,
									}}
								/>
							)}
						/>
					</S.Column>
					<S.Column>
						<S.Row>
							<S.ButtonImage onPress={showDatepicker}>
								<S.ButtonTextImage>Data do Atendimento</S.ButtonTextImage>
							</S.ButtonImage>
							<S.ButtonImage onPress={showTimepicker}>
								<S.ButtonTextImage>Hora do Atendimento</S.ButtonTextImage>
							</S.ButtonImage>
						</S.Row>
						<S.Label>Data Selecionada: {date.toLocaleString()}</S.Label>
						{show && (
							<Controller
								control={control}
								name="dataAtendimento"
								render={({ field: { onChange } }) => (
									<DateTimePicker
										testID="dateTimePicker"
										value={date}
										mode={mode}
										is24Hour={true}
										onChange={onChangeDate}
									/>
								)}
							/>
						)}
					</S.Column>
					<S.Button onPress={handleSubmit(onSubmit)}>
						<S.ButtonText>Criar</S.ButtonText>
					</S.Button>
				</S.Form>
			</S.Wrapper>
		</S.Container>
	);
};

export default RelatorioScreen;

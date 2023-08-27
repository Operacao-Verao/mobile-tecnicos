import React, { useState } from 'react';
import { Image } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { schemaRelatorio } from '../../utils';

import {
	MultipleSelectList,
	SelectList,
} from 'react-native-dropdown-select-list';

import {
	dataAreaAfetada,
	dataSituacao,
	dataTipoConstrucao,
	dataTipoTalude,
	dataVegetacao,
	dataVistoria,
} from '../../constants';
import { Input } from '../../components/Input';
import * as S from './styles';
import { useImagePicker } from './hooks/useImagePicker';

const RelatorioScreen = () => {
	const [selectedVistoria, setSelectedVistoria] = useState('');
	const [selectedAreaAfetada, setSelectedAreaAfetada] = useState('');
	const [selectedTipoConstrucao, setSelectedTipoConstrucao] = useState('');
	const [selectedTipoTalude, setSelectedTipoTalude] = useState('');
	const [selectedSituacao, setSelectedSituacao] = useState('');
	const [selectedVegetacao, setSelectedVegetacao] = useState('');
	const [selectedImageUri, setSelectedImageUri] = useState('');

	const handleImagePicker = async () => {
		const imageUri = await useImagePicker();
		if (imageUri) {
			setSelectedImageUri(imageUri);
		}
	};

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schemaRelatorio) });

	return (
		<S.Container>
			<S.Title>Criar Relatório</S.Title>
			<S.Button onPress={handleImagePicker}>
				{selectedImageUri ? (
					<S.ButtonText>Imagem salva</S.ButtonText>
				) : (
					<S.ButtonText>Selecionar foto</S.ButtonText>
				)}
			</S.Button>
			{selectedImageUri && <Image source={{ uri: selectedImageUri }} />}
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
				<MultipleSelectList
					setSelected={setSelectedVistoria}
					data={dataVistoria}
					save="key"
					label="Dados da Vistoria"
					fontFamily="Poppins_400Regular"
					placeholder="Dados da Vistoria"
					boxStyles={{ backgroundColor: 'white' }}
					dropdownTextStyles={{ color: '#94a3b8' }}
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
						<SelectList
							setSelected={setSelectedAreaAfetada}
							data={dataAreaAfetada}
							save="value"
							search={false}
							fontFamily="Poppins_400Regular"
							placeholder="Área Afetada"
							boxStyles={{ backgroundColor: 'white' }}
							dropdownTextStyles={{ color: '#94a3b8' }}
						/>
					</S.Column>
					<S.Column>
						<S.Label>Tipo Construção</S.Label>
						<SelectList
							setSelected={setSelectedTipoConstrucao}
							data={dataTipoConstrucao}
							save="value"
							search={false}
							fontFamily="Poppins_400Regular"
							placeholder="Tipo Construção"
							boxStyles={{ backgroundColor: 'white' }}
							dropdownTextStyles={{ color: '#94a3b8' }}
						/>
					</S.Column>
					<S.Column>
						<S.Label>Tipo Talude</S.Label>
						<SelectList
							setSelected={setSelectedTipoTalude}
							data={dataTipoTalude}
							save="value"
							search={false}
							fontFamily="Poppins_400Regular"
							placeholder="Tipo Talude"
							boxStyles={{ backgroundColor: 'white' }}
							dropdownTextStyles={{ color: '#94a3b8' }}
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
								name="afetados"
								render={({ field: { onChange } }) => (
									<Input.Root>
										<Input.Input onChange={onChange} keyboardType="numeric" />
										<Input.ErrorText ErrorText={errors.afetados?.message} />
									</Input.Root>
								)}
							/>
						</S.Column>
						<S.Column>
							<S.SmallLabel>Crianças</S.SmallLabel>
							<Controller
								control={control}
								name="afetados"
								render={({ field: { onChange } }) => (
									<Input.Root>
										<Input.Input onChange={onChange} keyboardType="numeric" />
										<Input.ErrorText ErrorText={errors.afetados?.message} />
									</Input.Root>
								)}
							/>
						</S.Column>
						<S.Column>
							<S.SmallLabel>Idosos</S.SmallLabel>
							<Controller
								control={control}
								name="afetados"
								render={({ field: { onChange } }) => (
									<Input.Root>
										<Input.Input onChange={onChange} keyboardType="numeric" />
										<Input.ErrorText ErrorText={errors.afetados?.message} />
									</Input.Root>
								)}
							/>
						</S.Column>
						<S.Column>
							<S.SmallLabel>Especiais</S.SmallLabel>
							<Controller
								control={control}
								name="afetados"
								render={({ field: { onChange } }) => (
									<Input.Root>
										<Input.Input onChange={onChange} keyboardType="numeric" />
										<Input.ErrorText ErrorText={errors.afetados?.message} />
									</Input.Root>
								)}
							/>
						</S.Column>
						<S.Column>
							<S.SmallLabel>Mortos</S.SmallLabel>
							<Controller
								control={control}
								name="afetados"
								render={({ field: { onChange } }) => (
									<Input.Root>
										<Input.Input onChange={onChange} keyboardType="numeric" />
										<Input.ErrorText ErrorText={errors.afetados?.message} />
									</Input.Root>
								)}
							/>
						</S.Column>
						<S.Column>
							<S.SmallLabel>Feridos</S.SmallLabel>
							<Controller
								control={control}
								name="afetados"
								render={({ field: { onChange } }) => (
									<Input.Root>
										<Input.Input onChange={onChange} keyboardType="numeric" />
										<Input.ErrorText ErrorText={errors.afetados?.message} />
									</Input.Root>
								)}
							/>
						</S.Column>
						<S.Column>
							<S.SmallLabel>Enfermos</S.SmallLabel>
							<Controller
								control={control}
								name="afetados"
								render={({ field: { onChange } }) => (
									<Input.Root>
										<Input.Input onChange={onChange} keyboardType="numeric" />
										<Input.ErrorText ErrorText={errors.afetados?.message} />
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
								name="animais"
								render={({ field: { onChange } }) => (
									<Input.Root>
										<Input.Input onChange={onChange} keyboardType="numeric" />
										<Input.ErrorText ErrorText={errors.animais?.message} />
									</Input.Root>
								)}
							/>
						</S.Column>
						<S.Column>
							<S.SmallLabel>Gatos</S.SmallLabel>
							<Controller
								control={control}
								name="animais"
								render={({ field: { onChange } }) => (
									<Input.Root>
										<Input.Input onChange={onChange} keyboardType="numeric" />
										<Input.ErrorText ErrorText={errors.animais?.message} />
									</Input.Root>
								)}
							/>
						</S.Column>
						<S.Column>
							<S.SmallLabel>Aves</S.SmallLabel>
							<Controller
								control={control}
								name="animais"
								render={({ field: { onChange } }) => (
									<Input.Root>
										<Input.Input onChange={onChange} keyboardType="numeric" />
										<Input.ErrorText ErrorText={errors.animais?.message} />
									</Input.Root>
								)}
							/>
						</S.Column>
						<S.Column>
							<S.SmallLabel>Equinos</S.SmallLabel>
							<Controller
								control={control}
								name="animais"
								render={({ field: { onChange } }) => (
									<Input.Root>
										<Input.Input onChange={onChange} keyboardType="numeric" />
										<Input.ErrorText ErrorText={errors.animais?.message} />
									</Input.Root>
								)}
							/>
						</S.Column>
					</S.Row>
				</S.Column>
				<S.Row>
					<S.Column>
						<S.Label>Situação</S.Label>
						<SelectList
							setSelected={setSelectedSituacao}
							data={dataSituacao}
							save="value"
							search={false}
							fontFamily="Poppins_400Regular"
							placeholder="Situação"
							boxStyles={{ backgroundColor: 'white' }}
							dropdownTextStyles={{ color: '#94a3b8' }}
						/>
					</S.Column>
					<S.Column>
						<S.Label>Vegetação</S.Label>
						<SelectList
							setSelected={setSelectedVegetacao}
							data={dataVegetacao}
							save="value"
							search={false}
							fontFamily="Poppins_400Regular"
							placeholder="Vegetação"
							boxStyles={{ backgroundColor: 'white' }}
							dropdownTextStyles={{ color: '#94a3b8' }}
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
			</S.Form>
		</S.Container>
	);
};

export default RelatorioScreen;

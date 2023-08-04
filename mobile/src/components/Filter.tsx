import { Entypo } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { fetchFilterOcorrencia } from '../redux/reducers/ocorrenciaReducer';
import { getAuthDataFromStorage } from '../utils/useStorage';

const Filter = () => {
	const [selected, setSelected] = useState<number>();
	const [token, setToken] = useState<string>();

	const options = ['Interditado', 'Não Interditado'];

	useEffect(() => {
		const fetchAuthData = async () => {
			const authData = await getAuthDataFromStorage();
			if (authData?.token) {
				setToken(authData.token);
			}
		};

		fetchAuthData();
	}, []);

	return (
		<SelectDropdown
			data={options}
			defaultButtonText="Filtrar..."
			buttonStyle={styles.Select}
			buttonTextStyle={styles.SelectText}
			dropdownStyle={styles.Dropdown}
			rowTextStyle={styles.rowText}
			dropdownIconPosition="right"
			renderDropdownIcon={(opened) => {
				return (
					<Entypo
						name={opened ? 'chevron-up' : 'chevron-down'}
						color="#444"
						size={18}
					/>
				);
			}}
			onSelect={(status, index) => {
				fetchFilterOcorrencia(status);
				console.log(status);
				setSelected(index);
			}}
			buttonTextAfterSelection={(status, index) => {
				return status;
			}}
			rowTextForSelection={(item, index) => {
				return item;
			}}
		/>
	);
};

const styles = StyleSheet.create({
	Select: {
		flex: 1,
		height: 45,
		backgroundColor: '#FFF',
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#475569',
		width: 150,
	},
	SelectText: {
		color: '#475569',
	},
	Dropdown: {
		borderRadius: 8,
		marginTop: -16,
	},
	rowText: {
		color: '#475569',
	},
});

export default Filter;

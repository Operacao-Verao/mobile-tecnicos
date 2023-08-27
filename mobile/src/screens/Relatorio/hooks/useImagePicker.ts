import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import { Alert } from 'react-native';

export const useImagePicker = async () => {
	const [selectedImageUri, setSelectedImageUri] = useState('');

	try {
		const { status } = await ImagePicker.requestCameraPermissionsAsync();
		if (status !== ImagePicker.PermissionStatus.GRANTED) {
			return Alert.alert(
				'É necessário conceder permissão para acessar seu álbum!'
			);
		}

		const response = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
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
			console.log(imgManipuled.base64);
		}
	} catch (error) {
		console.log(error);
	}

	if (selectedImageUri != '') {
		return selectedImageUri;
	}

	return null;
};

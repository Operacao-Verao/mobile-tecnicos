import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
	flex: 1;
	background-color: #202020;
`;

export const Wrapper = styled.View`
	flex: 1;
	justify-content: space-between;
	padding: 40px 20px 40px 20px;
`;

export const Form = styled.View`
	gap: 24px;
`;

export const Title = styled.Text`
	font-weight: bold;
	font-size: 30px;
	text-align: center;
	color: #fff;
	margin-bottom: 16px;
`;

export const ViewError = styled.View`
	background-color: #fecaca;
	padding: 20px;
	border-radius: 6px;
`;

export const TextError = styled.Text`
	color: #f87171;
	text-align: center;
`;

export const Label = styled.Text`
	color: #fff;
	margin: 0 0 -8px 4px;
`;

export const Button = styled.TouchableOpacity`
	padding: 20px;
	background-color: #0ea5e9;
	border-radius: 9999px;
`;

export const TextButton = styled.Text`
	color: #fff;
	font-weight: 600;
	text-align: center;
`;

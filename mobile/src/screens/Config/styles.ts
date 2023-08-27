import styled from 'styled-components/native';

export const Container = styled.ScrollView`
	flex: 1;
	background-color: ${(props) => props.theme.background};
	padding: 20px;
`;

export const TopBar = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

export const Title = styled.Text`
	color: ${(props) => props.theme.color};
	font-family: Poppins_600SemiBold;
	font-size: 24px;
`;

export const ButtonMode = styled.TouchableOpacity`
	justify-content: center;
`;

export const Settings = styled.View`
	margin-top: 20px;
`;

export const SettingsAccount = styled.View``;

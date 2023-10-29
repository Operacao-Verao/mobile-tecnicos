import styled from 'styled-components/native';

export const Container = styled.ScrollView`
	flex: 1;
	background-color: ${(props) => props.theme.background};
	padding: 20px;
`;

export const TopBar = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 50px;
`;

export const Title = styled.Text`
	color: ${(props) => props.theme.color};
	font-family: Poppins_600SemiBold;
	font-size: 24px;
`;

export const ButtonMode = styled.TouchableOpacity`
	justify-content: center;
`;

export const SettingsButton = styled.TouchableOpacity`
	margin-top: 10px;
`;

export const SettingsAccount = styled.View``;

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

export const Button = styled.TouchableOpacity`
	flex-direction: row;
	width: 100%;
	gap: 24px;
	padding-top: 20px;
`;

export const Icon = styled.View`
	align-items: center;
	justify-content: center;
`;

export const Content = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	flex: 1;
`;

export const TextContent = styled.View``;

export const ItemTitle = styled.Text`
	color: ${(props) => props.theme.color};
	font-family: Poppins_500Medium;
	font-size: 15px;
`;

export const ItemSubtitle = styled.Text`
	color: ${(props) => props.theme.color};
	font-family: Poppins_400Regular;
	font-size: 13px;
`;

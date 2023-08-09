import styled from 'styled-components/native';

export const Container = styled.ScrollView`
	flex: 1;
	background-color: ${(props) => props.theme.background};
`;
export const Wrapper = styled.View`
	padding: 20px;
`;

export const Title = styled.Text`
	color: ${(props) => props.theme.color};
	font-family: Poppins_600SemiBold;
	font-size: 24px;
	text-align: center;
`;

export const ViewFilter = styled.View`
	align-items: flex-end;
	margin-top: 24px;
`;

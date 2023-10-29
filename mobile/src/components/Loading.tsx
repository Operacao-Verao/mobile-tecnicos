import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

export function Loading() {
	return (
		<Container>
			<ActivityIndicator color="#0ea5e9" />
		</Container>
	);
}

export const Container = styled.View`
	background-color: ${(props) => props.theme.background};
	flex: 1;
	justify-content: center;
	align-items: center;
`;

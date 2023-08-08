import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './tab.routes';
import { useAppDispatch, useAppSelector } from '../redux/hooks/useApp';
import { useColorScheme } from 'react-native';
import { useEffect } from 'react';
import { setThemeStatus } from '../redux/reducers/themeReducer';
import themes from '../theme';
import { ThemeProvider } from 'styled-components/native';

const Routes = () => {
	const dispatch = useAppDispatch();
	const deviceTheme = useColorScheme();
	const state = useAppSelector((state) => state.theme);
	const theme = deviceTheme ? themes[state.status] : themes.dark;

	useEffect(() => {
		dispatch(setThemeStatus(deviceTheme));
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<NavigationContainer>
				<AppRoutes />
			</NavigationContainer>
		</ThemeProvider>
	);
};

export default Routes;

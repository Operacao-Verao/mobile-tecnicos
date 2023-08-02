import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import Routes from './src/Routes';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
	return (
		<Provider store={store}>
			<SafeAreaView className="flex-1">
				<Routes />
				<StatusBar backgroundColor="transparent" translucent />
			</SafeAreaView>
		</Provider>
	);
}

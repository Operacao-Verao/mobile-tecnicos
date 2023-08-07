import { StatusBar } from 'expo-status-bar';
import { Appearance } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import Routes from './src/Routes';
import { store } from './src/redux/store';
import { useAppDispatch } from './src/redux/hooks/useApp';

export default function App() {
	

	return (
		<Provider store={store}>
			<SafeAreaView className="flex-1">
				<Routes />
				<StatusBar backgroundColor="#202020" style="light" translucent />
			</SafeAreaView>
		</Provider>
	);
}

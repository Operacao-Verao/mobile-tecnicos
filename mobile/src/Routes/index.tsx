import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './tab.routes';

const Routes = () => {
  return (
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
  );
};

export default Routes;

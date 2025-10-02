import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationsStrings from '../constants/navigationsStrings';
import TabRoutes from './TabRoutes';

export default function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            component={TabRoutes}
            name={navigationsStrings.TabRoutes}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

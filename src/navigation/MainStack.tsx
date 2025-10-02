import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import navigationsStrings from '../constants/navigationsStrings';
import ProductList from '../Screens/ProductList/ProductList';

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={navigationsStrings.ProductList}
        component={ProductList}
      />
     
    </Stack.Navigator>
  );
};

export default MainStack;

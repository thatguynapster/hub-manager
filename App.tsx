/**
 * @format
 */

import React from 'react';

import tw from './lib/tailwind';
import {useDeviceContext} from 'twrnc';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RiderDeliveriesList from './views/rider-deliveries-list';
import MainScreen from './views/main';

const Stack = createStackNavigator();

const App = () => {
  useDeviceContext(tw); // <- 👋

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{header: () => null}}
        />
        <Stack.Screen name="RiderDeliveries" component={RiderDeliveriesList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

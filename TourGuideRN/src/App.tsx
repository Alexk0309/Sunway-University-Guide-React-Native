import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './modules/main/view/splash';
import TabNavigation from './modules/main/view/tabNavigation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={TabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

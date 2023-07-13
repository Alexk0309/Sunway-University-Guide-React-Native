import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from '../main/view/splash';
import AppStack from './appStack';
import LoginScreen from '../main/view/loginScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Splash"
        component={Splash}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={AppStack}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

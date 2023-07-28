import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ARInstructions from '../ar/view/arInstructions';
import ARScreen from '../ar/view/arScreen';

const Stack = createNativeStackNavigator();

const ARStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{title: 'ARMap'}}
        name="Instructions"
        component={ARInstructions}
      />
      <Stack.Screen
        options={{title: 'ARMap'}}
        name="ARNavigation"
        component={ARScreen}
      />
    </Stack.Navigator>
  );
};

export default ARStack;

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import GroundFloorScreen from '../directory/view/groundFloor';
import MezzanineFloorScreen from '../directory/view/mezzanineFloor';
import DirectoryScreen from '../directory/view/directoryScreen';

const Stack = createNativeStackNavigator();

const DirectoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Directory" component={DirectoryScreen} />
      <Stack.Screen
        name="GroundFloor"
        component={GroundFloorScreen}
        options={{title: 'Ground Floor'}}
      />
      <Stack.Screen
        name="MezzanineFloor"
        component={MezzanineFloorScreen}
        options={{title: 'Mezzanine Floor'}}
      />
    </Stack.Navigator>
  );
};

export default DirectoryStack;

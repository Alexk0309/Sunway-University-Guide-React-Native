import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from '../feed/view/feedScreen';
import ARScreen from '../ar/view/arScreen';
import ProfileScreen from '../auth/view/profileScreen';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import DirectoryStack from './directoryStack';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          switch (route.name) {
            case 'Feed':
              return <MaterialIcon name="event" size={30} color={color} />;
            case 'ARMap':
              return <MaterialIcon name="navigation" size={30} color={color} />;
            case 'Profile':
              return (
                <FontAwesome5Icon name="user-alt" size={25} color={color} />
              );
            case 'DirectoryMenu':
              return <MaterialIcon name="menu-book" size={30} color={color} />;
          }
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#266fff',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{title: "What's New"}}
      />
      <Tab.Screen
        name="DirectoryMenu"
        component={DirectoryStack}
        options={{headerShown: false}}
      />
      <Tab.Screen name="ARMap" component={ARScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppStack;

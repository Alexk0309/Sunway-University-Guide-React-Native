import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from '../../feed/view/feedScreen';
import ARScreen from '../../ar/view/arScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="ARMap" component={ARScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

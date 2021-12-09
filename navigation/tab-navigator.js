import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigator from './root-navigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ReadMe from "../view/read-me";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="FHM"
        component={StackNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="align-horizontal-left"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Inscription"
        component={ReadMe}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

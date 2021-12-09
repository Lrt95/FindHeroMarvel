import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../view/sign-in';
import SignUp from '../view/sign-up';
import Home from '../view/home';
import Description from '../view/description';
import Hero from '../view/hero';

const FHMStack = createStackNavigator();

function FHMSTackNavigator() {
  return (
    <FHMStack.Navigator>
      <FHMStack.Screen name="SignIn" component={SignIn} />
      <FHMStack.Screen name="SignUp" component={SignUp} />
      <FHMStack.Screen
        name="Home"
        component={Home}
        options={{headerLeft: null, gestureEnabled: false}}
      />
      <FHMStack.Screen name="Description" component={Description} />
      <FHMStack.Screen
        name="Hero"
        component={Hero}
        options={({route}) => ({
          title: route.params.name ? route.params.name : 'TEST',
        })}
      />
    </FHMStack.Navigator>
  );
}

function RootNavigator() {
  return (
    <NavigationContainer>
      <FHMSTackNavigator />
    </NavigationContainer>
  );
}

export default RootNavigator;

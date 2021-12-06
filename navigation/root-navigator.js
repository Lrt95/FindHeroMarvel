import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../view/sign-in';
import SignUp from '../view/sign-up';
import Home from '../view/home';
import Description from '../view/description';
import Hero from '../view/hero';

const FHMStack = createStackNavigator();

function FMHSTackNavigator() {
  return (
    <FHMStack.Navigator>
      <FHMStack.Screen name="SignIn" component={SignIn} />
      <FHMStack.Screen name="SignUp" component={SignUp} />
      <FHMStack.Screen name="Home" component={Home} />
      <FHMStack.Screen name="Description" component={Description} />
      <FHMStack.Screen name="Hero" component={Hero} />
    </FHMStack.Navigator>
  );
}

function RootNavigator() {
  return (
    <NavigationContainer>
      <FMHSTackNavigator />
    </NavigationContainer>
  );
}

export default RootNavigator;

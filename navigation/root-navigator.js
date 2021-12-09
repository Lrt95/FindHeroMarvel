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
      <FHMStack.Screen 
      name="SignIn"
      component={SignIn}
      options={{ 
        title: 'Bienvenue sur FHM !',
        headerTitleAlign: 'center',
      }}
      />
      <FHMStack.Screen 
        name="SignUp"
        component={SignUp}
        options={{ 
          title: 'Inscription',
          headerTitleAlign: 'center',
        }}
      />
      <FHMStack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: null, 
          gestureEnabled: false,
          title: 'Accueil',
          headerTitleAlign: 'center',
          }}
        />
      <FHMStack.Screen 
        name="Description" 
        component={Description} 
        options={{ 
          title: 'Description',
          headerTitleAlign: 'center',
        }}
      />
      <FHMStack.Screen
        name="Hero"
        component={Hero}
        options={({route}) => ({
          title: route.params.name ? route.params.name : 'Qui suis-je ?',
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

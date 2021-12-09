import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../view/sign-in';
import SignUp from '../view/sign-up';
import Home from '../view/home';
import Description from '../view/description';
import Hero from '../view/hero';
import {useTheme} from 'react-native-paper';

const FHMStack = createStackNavigator();

function FHMSTackNavigator() {
  const theme = useTheme();
  return (
    <FHMStack.Navigator>
      <FHMStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: 'Connexion',
          headerTintColor: theme.colors.primary,
          headerStyle: {backgroundColor: theme.colors.background},
        }}
      />
      <FHMStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: 'Inscription',
          headerTintColor: theme.colors.primary,
          headerStyle: {backgroundColor: theme.colors.background},
        }}
      />
      <FHMStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Liste des héros',
          headerLeft: null,
          gestureEnabled: false,
          headerTintColor: theme.colors.primary,
          headerStyle: {backgroundColor: theme.colors.background},
        }}
      />
      <FHMStack.Screen
        name="Description"
        component={Description}
        options={{
          title: 'Description',
          headerTintColor: theme.colors.primary,
          headerStyle: {backgroundColor: theme.colors.background},
        }}
      />
      <FHMStack.Screen
        name="Hero"
        component={Hero}
        options={({route}) => ({
          title: route.params.name
            ? route.params.name
            : 'Quel(le) héro(ine) es-tu?',
          headerTintColor: theme.colors.primary,
          headerStyle: {backgroundColor: theme.colors.background},
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

import * as React from 'react';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../view/sign-in';
import SignUp from '../view/sign-up';
import Home from '../view/home';
import Description from '../view/description';
import Hero from '../view/hero';
import {Button, useTheme} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ReadMe from '../view/read-me';
import {useDispatch} from 'react-redux';
import {deleteUser} from '../store/reducer/user-reducer';
import { TouchableOpacity } from "react-native";

const FHMStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function FHMSTackNavigator() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function handleDisconnection() {
    dispatch(deleteUser());
    navigation.navigate('SignIn');
  }
  return (
    <FHMStack.Navigator>
      <FHMStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: 'Connexion',
          headerTintColor: theme.colors.primary,
          headerStyle: {backgroundColor: theme.colors.backgroundSecond},
        }}
      />
      <FHMStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: 'Inscription',
          headerTintColor: theme.colors.primary,
          headerStyle: {backgroundColor: theme.colors.backgroundSecond},
        }}
      />
      <FHMStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Liste des héros',
          headerLeft: null,
          headerRight: () => (
            <TouchableOpacity
              onPress={handleDisconnection}
              style={{flex: 1, justifyContent: 'center'}}>
              <MaterialCommunityIcons
                style={{marginRight: 5}}
                name="exit-to-app"
                color={theme.colors.primary}
                size={25}
              />
            </TouchableOpacity>
          ),
          gestureEnabled: false,
          headerTintColor: theme.colors.primary,
          headerStyle: {backgroundColor: theme.colors.backgroundSecond},
        }}
      />
      <FHMStack.Screen
        name="Description"
        component={Description}
        options={({route}) => ({
          headerBackTitle: 'Retour',
          title: route.params.name ? route.params.name : 'Description',
          headerTintColor: theme.colors.primary,
          headerStyle: {backgroundColor: theme.colors.backgroundSecond},
        })}
      />
      <FHMStack.Screen
        name="Hero"
        component={Hero}
        options={({route}) => ({
          title: route.params.name
            ? route.params.name
            : 'Quel(le) héro(ine) es-tu?',
          headerBackTitle: 'Retour',
          headerTintColor: theme.colors.primary,
          headerStyle: {backgroundColor: theme.colors.backgroundSecond},
        })}
      />
    </FHMStack.Navigator>
  );
}

function MyTabs() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: theme.colors.backgroundSecond},
        headerShown: false,
      }}>
      <Tab.Screen
        name="FHM"
        component={FHMSTackNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="spider" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Read Me"
        component={ReadMe}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="view-list"
              color={theme.colors.primary}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default RootNavigator;

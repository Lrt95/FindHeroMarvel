/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import RootNavigator from './navigation/root-navigator';
import firebase from "firebase/compat";
import { firebaseConfig } from "./config/config";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

firebase.initializeApp(firebaseConfig);

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PaperProvider theme={theme}>
        <RootNavigator />
      </PaperProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

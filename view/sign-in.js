import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';

function SignIn(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text>Hello SignIn</Text>
      </View>
      <View style={styles.containerButton}>
        <Button
          mode="contained"
          onPress={() => props.navigation.navigate('SignUp')}>
          Sign Up
        </Button>
        <Button
          mode="contained"
          onPress={() => props.navigation.navigate('SignIn')}>
          SignIn
        </Button>
        <Button
          mode="contained"
          onPress={() => props.navigation.navigate('Home')}>
          Home
        </Button>
        <Button
          mode="contained"
          onPress={() => props.navigation.navigate('Description')}>
          Description
        </Button>
        <Button
          mode="contained"
          onPress={() => props.navigation.navigate('Hero')}>
          Hero
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  containerText: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  containerButton: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default SignIn;

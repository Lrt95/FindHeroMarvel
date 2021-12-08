import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FormSignIn from '../components/form-sign-in';

function SignIn({navigation}) {
  return (
    <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
      <Card style={styles.container}>
        <Card.Content style={styles.containerLogo}>
          <Text style={styles.title}>FHM</Text>
        </Card.Content>
        <Card.Content style={styles.containerFormik}>
          <FormSignIn navigation={navigation} />
        </Card.Content>
      </Card>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLogo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 70,
    fontWeight: 'bold',
  },
  containerFormik: {
    flex: 1,
  },
  containerInput: {
    flex: 1,
  },
  containerButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignIn;

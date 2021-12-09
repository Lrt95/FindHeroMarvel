import * as React from 'react';
import {StyleSheet} from 'react-native';
import { Card, Text, useTheme } from "react-native-paper";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FormSignIn from '../components/form-sign-in';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';

function SignIn({navigation}) {
  const user = useSelector(state => state.user.user);
  const theme = useTheme();

  useEffect(() => {
    if (user.email !== '') {
      navigation.navigate('Home');
    }
  }, [navigation, user.email]);

  return (
    <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
      <Card style={{flex: 1, backgroundColor: theme.colors.background}}>
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
  containerLogo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'white',
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

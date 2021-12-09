import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Text, useTheme} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FormSignUp from '../components/form-sign-up';

function SignUp({navigation}) {
  const theme = useTheme();
  return (
    <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
      <Card style={{flex: 1, backgroundColor: theme.colors.background}}>
        <Card.Content style={styles.containerLogo}>
          <Text style={styles.title}>FHM</Text>
        </Card.Content>
        <Card.Content style={styles.containerFormik}>
          <FormSignUp navigation={navigation} />
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
    fontSize: 100,
    fontWeight: 'bold',
    color: 'white',
  },
  containerFormik: {
    flex: 1,
  },
});

export default SignUp;

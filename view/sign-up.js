import * as React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FormSignUp from '../components/form-sign-up';

function SignUp({navigation}) {
  return (
    <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
      <Card style={styles.container}>
        <Card.Content style={styles.containerLogo}>
        <Image 
          style={styles.img}
          source={{
            uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/FHM.svg/1200px-FHM.svg.png',
          }}
          />
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
  img: {
    width: "100%",
    height: 150,
    margin: 40,
  },
  containerFormik: {
    flex: 1,
  },
});

export default SignUp;

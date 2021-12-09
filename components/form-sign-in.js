import React from 'react';
import {Formik} from 'formik';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet, LogBox,
} from "react-native";
import {Button} from 'react-native-paper';
import InputTextFormik from './input-text-formik';
import {validationSchema} from '../constantes/forms-validatations';
import Spinner from './spinner';
import {useState} from 'react';
import {firebase} from '../config/firebase';
import {useDispatch} from 'react-redux';
import {setUser} from '../store/reducer/user-reducer';

function FormSignIn(props) {
  const [inLoggin, setInLoggin] = useState(false);
  const dispatch = useDispatch();

  LogBox.ignoreLogs(['Require cycle:']);

  async function getSignIn(values, action) {
    const data = {email: values.email, password: values.password};
    setInLoggin(true);
    console.log('signIn');
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(response => {
        if (response.user) {
          dispatch(setUser(response.user.email));
        }
        setInLoggin(false);
      })
      .catch(error => {
        console.log(error);
        setInLoggin(false);
      });
  }

  function onBlurInputSignMail(setFieldTouched) {
    setFieldTouched('email');
  }

  function onBlurInputSignEmail(setFieldTouched) {
    setFieldTouched('password');
  }

  function handleSignUp() {
    props.navigation.navigate('SignUp');
  }

  return (
    <Formik
      initialValues={{password: '', email: ''}}
      onSubmit={(values, action) => getSignIn(values, action)}
      validationSchema={validationSchema}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
      }) => (
        <View style={styles.containerInput}>
          <InputTextFormik
            label={'E-mail'}
            values={values.email}
            touched={touched.email}
            errors={errors.email}
            onChangeText={handleChange('email')}
            onBlur={() => onBlurInputSignMail(setFieldTouched)}
          />
          <InputTextFormik
            label={'Mot de passe'}
            values={values.password}
            touched={touched.password}
            errors={errors.password}
            onChangeText={handleChange('password')}
            secureTextEntry={true}
            onBlur={() => onBlurInputSignEmail(setFieldTouched)}
          />
          <View style={styles.containerButton}>
            <Button
              icon="account"
              mode="contained"
              title="Sign In"
              style={styles.loginBtn}
              disabled={!isValid}
              onPress={handleSubmit}>
              Connexion
            </Button>
            <Button
              icon="account"
              mode="contained"
              title="Sign Up"
              style={styles.loginBtn}
              onPress={handleSignUp}>
              Inscription
            </Button>
            <TouchableOpacity
              style={styles.loginBtnFb}
              onPress={() => console.log('Google')}>
              <Text style={{color: '#fff'}}>Connexion avec Facebook</Text>
            </TouchableOpacity>
          </View>
          {inLoggin ? <Spinner /> : <View style={{flex: 1}} />}
        </View>
      )}
    </Formik>
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
  loginBtnFb: {
    backgroundColor: '#4267b2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  loginBtn: {
    marginTop: 20,
    width: '70%',
  },
});

export default FormSignIn;

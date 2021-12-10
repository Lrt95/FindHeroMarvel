import React, {useState} from 'react';
import {Formik} from 'formik';
import {validationSchema} from '../constantes/forms-validatations';
import {
  View,
  StyleSheet,
  Platform,
  ToastAndroid,
  Alert,
  LogBox,
} from 'react-native';
import InputTextFormik from './input-text-formik';
import {Button, Text} from 'react-native-paper';
import Spinner from './spinner';
import {firebase} from '../config/firebase';

function FormSignUp(props) {
  const [inLoggin, setInLoggin] = useState(false);

  LogBox.ignoreLogs(['Require cycle:']);

  function displayToast(message) {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.LONG);
    } else {
      Alert.alert(message);
    }
  }

  async function registryUser(values, action) {
    if (values.password !== values.confirmPassword) {
      action.setErrors({
        password: 'Les mots de passe ne correspondent pas !',
        confirmPassword: 'Les mots de passe ne correspondent pas !',
      });
    } else {
      const data = {
        email: values.email,
        password: values.password,
      };
      setInLoggin(true);

      firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then(res => {
          if (res.user) {
            displayToast('Le compte à bien été crée !');
            props.navigation.navigate('SignIn');
          }
          setInLoggin(false);
        })
        .catch(error => {
          setInLoggin(false);
          displayToast(error.toString());
        });
    }
  }

  function onBlurInput(setFieldTouched, field) {
    setFieldTouched(field);
  }

  return (
    <Formik
      initialValues={{email: '', password: '', confirmPassword: ''}}
      onSubmit={(values, actions) => registryUser(values, actions)}
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
            onBlur={() => onBlurInput(setFieldTouched, 'email')}
          />
          <InputTextFormik
            label={'Mot de passe'}
            values={values.password}
            touched={touched.password}
            errors={errors.password}
            onChangeText={handleChange('password')}
            secureTextEntry={true}
            onBlur={() => onBlurInput(setFieldTouched, 'password')}
          />
          <InputTextFormik
            label={'Confirmation mot de passe'}
            values={values.confirmPassword}
            touched={touched.confirmPassword}
            errors={errors.confirmPassword}
            onChangeText={handleChange('confirmPassword')}
            secureTextEntry={true}
            onBlur={() => onBlurInput(setFieldTouched, 'confirmPassword')}
          />
          <View style={styles.containerButton}>
            <Button
              icon="account-plus"
              mode="contained"
              title="Sign In"
              style={{width: '70%'}}
              disabled={!isValid}
              onPress={handleSubmit}>
              Créer Compte
            </Button>
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
  registerBtn: {
    backgroundColor: '#4267b2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
  },
});

export default FormSignUp;

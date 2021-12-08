import React from 'react';
import {Formik} from 'formik';
import {
  Alert,
  Platform,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {Button} from 'react-native-paper';
import InputTextFormik from './input-text-formik';
import {validationSchema} from '../constantes/forms-validatations';
import Spinner from './spinner';
import {useState} from 'react';

function FormSignIn(props) {
  const [inLoggin, setInLoggin] = useState(false);

  function displayToast(message) {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.LONG);
    } else {
      Alert.alert(message);
    }
  }

  async function getSignIn(values, action) {
    const data = {email: values.email, password: values.password};
    setInLoggin(true);
    // setSignIn(data).then(result => {
    //   this.setState({...this.state, inLogin: false});
    //   if (result.status === 401) {
    //     action.setErrors({
    //       email: "L'adresse mail est introuvable !",
    //       password: 'Le mot de passe est incorrect !',
    //     });
    //   } else if (result.status === 201) {
    //     this.displayToast('Bienvenue ' + result.data.pseudo + ' !');
    //     this.props.getUser(result.data);
    //     this.props.loggin(true);
    //     this.props.navigation.navigate('game');
    //   } else {
    //     this.displayToast('Erreur requête login !');
    //   }
    // });
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

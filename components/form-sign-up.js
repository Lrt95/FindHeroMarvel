import React, {useState} from 'react';
import {Formik} from 'formik';
import {validationSchema} from '../constantes/forms-validatations';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import InputTextFormik from './input-text-formik';
import {Button, Text} from 'react-native-paper';
import Spinner from './spinner';

function FormSignUp(props) {
  const [inLoggin, setInLoggin] = useState(false);

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
    }

    // setSignUp(data).then(result => {
    //   this.setState({...this.state, inLogin: false})
    //   if (result["status"] === 401) {
    //     action.setErrors({
    //       pseudo: "Le pseudo est déjà utilisé !",
    //       email: "L'adresse mail est déjà utilisé!"
    //     });
    //   } else if (result["status"] === 201) {
    //     this.displayToast('Bienvenue ' + result['data'].pseudo + " !");
    //     this.props.getUser(result['data']);
    //     this.props.loggin(true);
    //     this.props.facebookOrGoogle(false);
    //     this.props.navigation.navigate("profileStack");
    //   } else {
    //     this.displayToast('Erreur requête login !');
    //   }
    // })
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
            <TouchableOpacity
              style={styles.registerBtn}
              onPress={() => console.log('FB')}>
              <Text style={{color: '#fff'}}>S'enregistrer avec Facebook</Text>
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
  registerBtn: {
    backgroundColor: '#4267b2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
  },
});

export default FormSignUp;

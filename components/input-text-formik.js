import React from 'react';
import {HelperText, TextInput} from 'react-native-paper';

function InputTextFormik(props) {
  return (
    <>
      <TextInput
        label={props.label}
        mode="outlined"
        value={props.values}
        error={!!(props.touched && props.errors)}
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        secureTextEntry={props.secureTextEntry}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <HelperText type="error" visible={!!(props.touched && props.errors)}>
        {props.errors}
      </HelperText>
    </>
  );
}

export default InputTextFormik;

import React from 'react';
import {HelperText, TextInput} from 'react-native-paper';

function InputTextFormik(props) {
  return (
    <>
      <TextInput
        style={{backgroundColor: 'white'}}
        label={props.label}
        theme={{colors: 'black'}}
        mode="outlined"
        value={props.values}
        error={!!(props.touched && props.errors)}
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        secureTextEntry={props.secureTextEntry}
      />
      <HelperText
        theme={{colors: 'black'}}
        type="error"
        visible={!!(props.touched && props.errors)}>
        {props.errors}
      </HelperText>
    </>
  );
}

export default InputTextFormik;

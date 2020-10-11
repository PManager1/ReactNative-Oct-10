import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import Field from './Field';

const getInitialState = (fieldKeys) => {
  const state = {};
  fieldKeys.forEach((key) => {
    state[key] = '';
  });

  return state;
};

// const Form = ({ fields, buttonText, action, afterSubmit }) => {

const Form = ({ fields }) => {
  const fieldKeys = Object.keys(fields);
  const [values, setValues] = useState(getInitialState(fieldKeys));

  const onChangeValue = (key, value) => {
    const newState = { ...values, [key]: value };
    setValues(newState);
  };

  return fieldKeys.map((key) => {
    const field = fields[key];
    return (
      <View key={key}>
        <Text>{field.label}</Text>
        <TextInput
          {...field.inputProps}
          value={values[key]}
          onChangeText={(text) => onChangeValue(key, text)}
        />
      </View>
    );
  });
};

export default Form;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  error: {
    marginBottom: 20,
    height: 17.5,
  },
});
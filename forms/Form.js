import React, { useState } from 'react';
import { Text, Animated, TextInput, View, StyleSheet } from 'react-native';
import Field from './Field';
import SubmitButton from './SubmitButton'

const getInitialState = (fieldKeys) => {
  const state = {};
  fieldKeys.forEach((key) => {
    state[key] = '';
  });

  return state;
};

// const Form = ({ fields, buttonText, action, afterSubmit }) => {
  const fadeOut = () =>
  Animated.timing(opacity, { toValue: 0.2, duration: 200 }).start();

const fadeIn = () =>
  Animated.timing(opacity, { toValue: 1, duration: 200 }).start();

const submit = async () => {
  console.log('submit clicked and returned'); return;
  setErrorMessage('');
  setValidationErrors(getInitialState(fieldKeys));

  const errors = validateFields(fields, values);
  if (hasValidationError(errors)) {
    return setValidationErrors(errors);
  }

  fadeOut();
  try {
    const result = await action(...getValues());
    fadeIn();
    await afterSubmit(result);
  } catch (e) {
    setErrorMessage(e.message);
    fadeIn();
  }
};


  const Form = ({ fields, buttonText, action, afterSubmit }) => {
    const fieldKeys = Object.keys(fields);
    const [values, setValues] = useState(getInitialState(fieldKeys));
    const [errorMessage, setErrorMessage] = useState('');
    const [validationErrors, setValidationErrors] = useState(
      getInitialState(fieldKeys),
    );
    const [opacity] = useState(new Animated.Value(1));

  
  const onChangeValue = (key, value) => {
    const newState = { ...values, [key]: value };
    setValues(newState);
  };

  console.log('58- fieldKeys= ', fieldKeys);
  // return fieldKeys.map((key) => {
  //   const field = fields[key];
    return (
      <View style={styles.container}>
        {/* <Text style={styles.error}>{errorMessage}</Text> */}
        <Animated.View style={{ opacity }}>
          {fieldKeys.map((key) => {
            return (
              <Field
                key={key}
                fieldName={key}
                field={fields[key]}
                // error={validationErrors[key]}
                onChangeText={onChangeValue}
                value={values[key]}
              />
            );
          })}
        </Animated.View>
        <SubmitButton title={buttonText} onPress={submit} />
      </View>
    );
  // });
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
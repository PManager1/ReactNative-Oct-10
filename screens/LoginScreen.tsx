// Bring in action from api etc here. 
import React, { useState } from 'react';
import Form from '../forms/Form';
// import { login } from '../api/authentication';
// import { setToken } from '../api/token';

import { Text, TextInput, View, StyleSheet } from 'react-native';

// const LoginScreen = ({ navigation }) => {
    const LoginScreen = () => {   
        
        const handleResult = async (result) => {
            if (result.ok && result.data) {
            //   await setToken(result.data.auth_token);
              navigation.navigate('Home');
            } else if (result.status === 401) {
              throw new Error('Invalid login.');
            } else {
              throw new Error('Something went wrong.');
            }
          };

          return (
            <Form
            //   action={login}
              afterSubmit={handleResult}
              buttonText="Submit"
              fields={{
                email: {
                  label: 'Email',
                  inputProps: {
                    keyboardType: 'email-address',
                  },
                },
                password: {
                  label: 'Password',
                  inputProps: {
                    secureTextEntry: true,
                  },
                },
              }}
            />
          );
        
};

export default LoginScreen;

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
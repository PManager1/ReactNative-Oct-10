import React, { useState } from 'react';
import Form from '../forms/Form';

import { Text, TextInput, View, StyleSheet } from 'react-native';


// const LoginScreen = ({ navigation }) => {
    const LoginScreen = () => {    
        return (
            <Form
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
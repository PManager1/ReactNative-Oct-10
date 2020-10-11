import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const Field = ({ fieldName, field, value, onChangeText, error }) => {
  return (
    <View>
      <Text>{field.label}</Text>
      <TextInput
        {...field.inputProps}
        value={value}
        onChangeText={(text) => onChangeText(fieldName, text)}
      />
      <Text>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Field;
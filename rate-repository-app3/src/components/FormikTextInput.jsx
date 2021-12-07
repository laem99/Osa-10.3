import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: 'red',
  },
  input: {
    height: 60,
    backgroundColor: '#ffffff',
    padding: 15,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
  inputError: {
    height: 60,
    backgroundColor: '#ffffff',
    padding: 15,
    borderWidth: 1,
    borderColor: '#d73a4a',
    borderRadius: 5,
  },
  inputContainer: {
    height: 70,
    padding: 15,
    marginTop: 20,
  }
});

export const FormikNumberInput = ({ name, testID, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <View style={styles.inputContainer}>
    <TextInput keyboardType="numeric" testID={testID} style={(!meta.error) ? styles.input : styles.inputError}
      onChangeText={value => helpers.setValue(value)}
      onBlur={() => helpers.setTouched(true)}
      value={field.value}
      error={showError}
      {...props}
    />
    {showError && <Text style={styles.errorText}>{meta.error}</Text>}
  </View>
  );
};

const FormikTextInput = ({ name, testID, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <View style={styles.inputContainer}>
      <TextInput testID={testID} style={(!meta.error) ? styles.input : styles.inputError}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  );
};

export default FormikTextInput;
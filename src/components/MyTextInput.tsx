import React, {forwardRef} from 'react';
import {TextInput, TextInputProps, StyleSheet, View, Text} from 'react-native';

interface MyInputProps extends TextInputProps {
  label: string;
  onError?: boolean;
  errorMessage?: string;
}

type Ref = React.LegacyRef<TextInput>;

const MyTextInput = forwardRef(
  ({label, onError, errorMessage, ...rest}: MyInputProps, ref: Ref) => {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput ref={ref} style={styles.input} {...rest} />
        {onError && <Text style={{color: 'red'}}>{errorMessage}</Text>}
      </View>
    );
  },
);

export default MyTextInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  label: {
    marginBottom: 5,
  },
});

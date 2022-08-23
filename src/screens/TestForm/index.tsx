import React from 'react';
import {View, StyleSheet, Button, StatusBar} from 'react-native';
import {
  useForm,
  SubmitHandler,
  Controller,
  RegisterOptions,
} from 'react-hook-form';
import {MyTextInput} from '../../components';

interface Inputs {
  firstName: string;
  lastName: string;
}

interface Rules {
  firstName: RegisterOptions;
  lastName: RegisterOptions;
}

const defaultValues: Inputs = {
  firstName: '',
  lastName: '',
};

const rules: Rules = {
  firstName: {
    required: 'First name tidak boleh kosong',
    minLength: {value: 5, message: 'First name minimal 5 karakter'},
  },
  lastName: {required: 'Nama belakang tidak boleh kosong'},
};

const TestForm = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm<Inputs>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  };

  console.log('errors', errors);

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <MyTextInput
            label="First Namex"
            placeholder="input firstname"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            onError={errors.firstName ? true : false}
            errorMessage={errors.firstName?.message}
          />
        )}
        name="firstName"
        rules={rules.firstName}
      />
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <MyTextInput
            label="Last Name"
            placeholder="input lastname"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            onError={errors.lastName ? true : false}
            errorMessage={errors.lastName?.message}
          />
        )}
        name="lastName"
        rules={rules.lastName}
      />
      <View style={styles.button}>
        <Button
          title="Reset"
          onPress={() => {
            reset({...defaultValues});
          }}
          color="#ec5990"
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Submit"
          onPress={handleSubmit(onSubmit)}
          color="#ec5990"
        />
      </View>
    </View>
  );
};

export default TestForm;

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    padding: 10,
  },
});

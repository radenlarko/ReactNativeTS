import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn} from '../screens';
import {LoginParamList} from '../types';

const Stack = createNativeStackNavigator<LoginParamList>();

const LoginNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{animation: 'slide_from_right'}}>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default LoginNavigation;

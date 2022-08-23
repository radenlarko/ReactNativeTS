import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Details, TestForm} from '../screens';
import {RootStackParamList} from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="TestForm" component={TestForm} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

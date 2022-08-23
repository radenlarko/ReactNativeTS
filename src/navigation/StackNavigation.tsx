import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Details} from '../screens';
import {StackParamList} from '../types';

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

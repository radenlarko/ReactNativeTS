import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {TabParamList} from '../types';
import {TestForm} from '../screens';
import StackNavigation from './StackNavigation';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator<TabParamList>();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: '#ec5990'}}>
      <Tab.Screen
        name="HomeScreen"
        component={StackNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TestForm"
        component={TestForm}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Feather name="book" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});

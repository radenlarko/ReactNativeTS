import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {TabParamList} from '../types';
import {TestForm} from '../screens';
import StackNavigation from './StackNavigation';

const Tab = createBottomTabNavigator<TabParamList>();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={StackNavigation} options={{headerShown: false}} />
      <Tab.Screen name="TestForm" component={TestForm} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});

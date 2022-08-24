import {NavigatorScreenParams} from '@react-navigation/native';
import React from 'react';

export interface ErrorResponse {
  error: {message: string; status_code: number};
}

export type Item = {
  userId: number;
  id: React.Key;
  title: string;
  body: string;
};

export type StackParamList = {
  Home: undefined;
  Details: {item: Item} | undefined;
};

export type TabParamList = {
  HomeScreen: undefined;
  TestForm: undefined;
};

export type LoginParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

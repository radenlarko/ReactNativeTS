import {StyleSheet, View} from 'react-native';
import React from 'react';

const Divider = ({gap}: {gap?: number}) => {
  return <View style={[styles.line, {marginVertical: gap || 10}]} />;
};

export default Divider;

const styles = StyleSheet.create({
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});

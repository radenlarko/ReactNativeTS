import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

const BgAuth = () => {
  return (
    <View
      style={{
        position: 'absolute',
        width: ScreenWidth,
        height: ScreenHeight,
      }}>
      <View style={{height: 340}}></View>
      <View
        style={{
          height: 180,
          backgroundColor: '#0771B9',
          marginLeft: -ScreenWidth,
          marginTop: 20,
          transform: [{rotate: '35deg'}],
        }}
      />
      <View style={{height: 130, backgroundColor: '#0668AB'}} />
      <View style={{height: 200, backgroundColor: '#05568E'}} />
    </View>
  );
};

export default BgAuth;

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({});

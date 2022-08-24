import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  StatusBar,
  ActivityIndicator,
  View,
  Dimensions,
} from 'react-native';
import {AdyawinsaApp} from '../../assets/';
import {mainColor} from '../../utils/color';

const Splash = () => {
  return (
    <View style={{flex: 1, backgroundColor: mainColor}}>
      <StatusBar barStyle="light-content" backgroundColor={mainColor} />
      <View>
        <View style={{height: 150}}></View>
        <View
          style={{
            height: 180,
            backgroundColor: '#0771B9',
            marginLeft: -ScreenWidth,
            marginTop: 20,
            transform: [{rotate: '35deg'}],
          }}
        />
        <View style={{height: 160, backgroundColor: '#0668AB'}} />
        <View style={{height: 160, backgroundColor: mainColor}} />
        <View style={{height: 200, backgroundColor: '#05568E'}} />
      </View>
      <View
        style={{
          width: ScreenWidth,
          height: ScreenHeight,
          position: 'absolute',
        }}>
        <View style={styles.header}>
          <Image source={AdyawinsaApp} style={styles.logo} />
          <ActivityIndicator
            color="white"
            size="large"
            style={{marginTop: 15}}
          />
        </View>
        <View style={styles.footer}>
          <Text style={styles.slogan}>Powered by ADYAWINSA</Text>
          <Text style={styles.version}>Version 2.0.3</Text>
        </View>
      </View>
    </View>
  );
};

export default Splash;

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  header: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: -130,
  },
  footer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 130,
    height: 77,
    resizeMode: 'contain',
  },
  slogan: {
    color: 'white',
    fontSize: 12,
    marginTop: 10,
  },
  version: {
    color: 'white',
    fontSize: 10,
    marginBottom: 40,
  },
});

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';

interface Props {
  label: string;
  button: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const Footer = ({label, button, onPress}: Props) => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerContent}>
        <Text style={styles.labelFooter}>{label}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.labelFooter, {fontWeight: 'bold'}]}>
            {button}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: ScreenWidth * 0.07,
  },
  labelFooter: {
    fontSize: 14,
    color: 'white',
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

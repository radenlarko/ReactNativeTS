import React, {forwardRef} from 'react';
import {
  TextInput,
  TextInputProps,
  StyleSheet,
  View,
  Text,
  StyleProp,
  ViewStyle,
  Dimensions,
  ColorValue,
} from 'react-native';
import {bgTextInput, dangerColor, labelColor, textColor} from '../utils/color';
import Feather from 'react-native-vector-icons/Feather';

interface MyInputProps extends TextInputProps {
  label: string;
  icon: string;
  colorLabel?: ColorValue;
  styleContainer?: StyleProp<ViewStyle>;
  onError?: boolean;
  errorMessage?: string;
}

type Ref = React.LegacyRef<TextInput>;

const MyTextInput = forwardRef(
  (
    {
      label,
      onError,
      errorMessage,
      icon,
      colorLabel,
      styleContainer,
      ...rest
    }: MyInputProps,
    ref: Ref,
  ) => {
    return (
      <View style={styles.container}>
        <Text style={[styles.label, {color: colorLabel || labelColor}]}>
          {label}
        </Text>
        <View style={[styles.textInputContainer, styleContainer]}>
          <Feather name={icon} size={24} color={labelColor} />
          <TextInput ref={ref} style={styles.textInput} {...rest} />
        </View>
        {onError && <Text style={styles.errMsg}>{errorMessage}</Text>}
      </View>
    );
  },
);

export default MyTextInput;

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: bgTextInput,
    borderRadius: 20,
    paddingHorizontal: 6,
  },
  textInput: {
    minHeight: 50,
    color: textColor,
    width: ScreenWidth * 0.75,
  },
  errMsg: {
    fontSize: 12,
    color: dangerColor,
  },
});

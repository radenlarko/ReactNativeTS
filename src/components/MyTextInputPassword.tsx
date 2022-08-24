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
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {bgTextInput, dangerColor, labelColor, textColor} from '../utils/color';
import Feather from 'react-native-vector-icons/Feather';

interface MyInputProps extends TextInputProps {
  label: string;
  icon: string;
  onSecure: (event: GestureResponderEvent) => void;
  isSecure: boolean;
  colorLabel?: ColorValue;
  styleContainer?: StyleProp<ViewStyle>;
  onError?: boolean;
  errorMessage?: string;
}

type Ref = React.LegacyRef<TextInput>;

const MyTextInputPassword = forwardRef(
  (
    {
      label,
      onError,
      errorMessage,
      icon,
      isSecure,
      onSecure,
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
          <TextInput ref={ref} secureTextEntry={isSecure} style={styles.textInput} {...rest} />
          <TouchableOpacity onPress={onSecure}>
            {isSecure ? (
              <Feather name="eye-off" size={20} color={labelColor} />
            ) : (
              <Feather name="eye" size={20} color={labelColor} />
            )}
          </TouchableOpacity>
        </View>
        {onError && <Text style={styles.errMsg}>{errorMessage}</Text>}
      </View>
    );
  },
);

export default MyTextInputPassword;

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
    width: ScreenWidth * 0.68,
  },
  errMsg: {
    fontSize: 12,
    color: dangerColor,
  },
});

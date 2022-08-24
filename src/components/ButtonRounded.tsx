import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  GestureResponderEvent,
  ColorValue,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {inActiveColor, secondColor} from '../utils/color';

interface Props {
  title: string;
  icon: string;
  bg?: ColorValue;
  disabled?: boolean | null;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  styleButton?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
}

const ButtonRounded = ({
  onPress,
  icon,
  title,
  bg,
  disabled,
  loading,
  style,
  styleButton,
}: Props) => {
  return (
    <View style={[{flexDirection: 'row'}, style]}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.button,
          {backgroundColor: disabled ? inActiveColor : bg || secondColor},
          styleButton,
        ]}>
        {loading ? (
          <ActivityIndicator
            size="small"
            color="white"
            style={{marginRight: 5}}
          />
        ) : (
          <Feather
            name={icon}
            color="white"
            size={24}
            style={{marginRight: 5}}
          />
        )}
        <Text style={{color: 'white'}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonRounded;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    minWidth: 140,
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});

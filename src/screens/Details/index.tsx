import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({route, navigation}: Props) => {
  const item = route.params?.item;
  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <Text>{JSON.stringify(item, null, 2)}</Text>
      <View style={styles.buttonContainer}>
        <Button
          color="teal"
          title="go to home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          color="tomato"
          title="fill form"
          onPress={() => navigation.navigate('TestForm')}
        />
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 4,
  },
});

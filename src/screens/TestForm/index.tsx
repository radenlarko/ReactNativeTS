import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TestForm = () => {
  return (
    <View style={styles.container}>
      <Text>TestForm</Text>
    </View>
  );
};

export default TestForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

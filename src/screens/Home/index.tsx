import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPost } from '../../utils/fetchApi';

const Home = () => {
  const {data} = useQuery(["posts"], getPost);
  console.log(data);
  return (
    <View style={styles.container}>
      <Text>Home Hello World</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

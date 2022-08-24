import {
  FlatList,
  GestureResponderEvent,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useContext} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useQuery} from '@tanstack/react-query';
import {getPost} from '../../utils/fetchApi';
import {useRefreshByUser, useRefreshOnFocus} from '../../hooks';
import {StackParamList, Item} from '../../types';
import {
  ButtonRounded,
  Divider,
  ErrorMessage,
  LoadingIndicator,
} from '../../components';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext} from '../../store/AuthContext';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

interface ListProps {
  item: Item;
  onPress?: (event: GestureResponderEvent) => void;
}

type OnListItemPress = (item: Item) => void;

const ListItem = ({item, onPress}: ListProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{fontWeight: 'bold'}}>
        {`[${item.id}]`} User Id: {item.userId}
      </Text>
      <Text style={{fontSize: 12, color: 'gray'}}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const Home = ({navigation}: Props) => {
  const {isLoading, error, data, refetch} = useQuery<Item[], Error>(
    ['posts'],
    getPost,
    {
      onSuccess: data => console.log('success: ', data.length),
    },
  );

  const {isRefetchingByUser, refetchByUser} = useRefreshByUser(refetch);
  useRefreshOnFocus(refetch);

  const {signOut} = useContext(AuthContext);

  const onListItemPress = useCallback<OnListItemPress>(
    item => {
      navigation.navigate('Details', {item});
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({item}: {item: Item}) => {
      return <ListItem item={item} onPress={() => onListItemPress(item)} />;
    },
    [onListItemPress],
  );

  if (isLoading) return <LoadingIndicator />;

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <View style={styles.container}>
      <Text>Home Hello World</Text>
      <Feather name="airplay" size={20} color="tomato" />
      <ButtonRounded icon="log-out" title="Logout" onPress={signOut} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.title}
        ItemSeparatorComponent={() => <Divider gap={14} />}
        refreshControl={
          <RefreshControl
            refreshing={isRefetchingByUser}
            onRefresh={refetchByUser}
          />
        }
        style={{marginTop: 20}}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});

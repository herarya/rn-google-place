import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {ReduxStoreType} from '../../redux/types';
import {IPlace} from '../../utils/interfaces';
import {PropsType} from './types';
import styles from './styles';
import {Icon} from '@ant-design/react-native';

const RecentPlaces = ({onPressItem}: PropsType) => {
  const recentPlaces = useSelector(
    (state: ReduxStoreType) => state.places.recentPlaces,
  );

  const handlePress = (item: IPlace) => {
    onPressItem(item);
  };

  const keyExtractor = (item, index) => item.placeId;

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      onPress={() => handlePress(item as IPlace)}
      style={styles.recentItem}>
      <Icon name="history" />
      <Text style={styles.recentItemText}>{item?.description}</Text>
    </TouchableOpacity>
  );

  if (recentPlaces.length === 0) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.recentLabel}>Recent</Text>
      <FlatList
        data={recentPlaces}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default RecentPlaces;

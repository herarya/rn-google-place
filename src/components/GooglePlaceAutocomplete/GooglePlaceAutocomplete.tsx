/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import React, {useState, useEffect} from 'react';
import {SearchBar, Icon} from '@ant-design/react-native';
import {PropsType} from './types';
import {
  GoogleDetailResponse,
  GooglePlaceQuery,
  useLazyFetchPlaceDetailsQuery,
  useLazyFetchPlacesQuery,
} from '../../services/google-place-service';
import useDebounce from '../../hooks/useDebounce';
import styles from './styles';
import Error from '../Error';
import RecentPlaces from '../RecentPlaces';
import {IPlace} from '../../utils/interfaces';

const GooglePlaceAutocomplete = ({
  apiKey,
  components = 'country:MY',
  language = 'en',
  onDetailResult,
  onCancel,
  onPressRecentResult,
}: PropsType) => {
  const [fetchPlaces, {data, error}] = useLazyFetchPlacesQuery();
  const [fetchPlaceDetails, {data: PlaceDetail, error: placeDetailError}] =
    useLazyFetchPlaceDetailsQuery();
  const [inputValue, setInputValue] = useState('');
  const searchTerm = useDebounce(inputValue, 300);

  useEffect(() => {
    if (searchTerm.length > 2) {
      handleFetchPlaces(searchTerm);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (PlaceDetail?.data) {
      handleSuccessGetDetail(PlaceDetail?.data);
    }
  }, [PlaceDetail]);

  const handleSuccessGetDetail = (response: GoogleDetailResponse) => {
    if (response.status === 'OK') {
      onDetailResult(response.result);
    }
  };

  const handleFetchPlaces = (input: string) => {
    const query: GooglePlaceQuery = {
      key: apiKey,
      components,
      language,
      input,
    };
    fetchPlaces(query);
  };

  const handleTextChange = (text: string) => {
    setInputValue(text);
  };

  const keyExtractor = (item:any, index: number) => index.toString();

  const renderItem = ({item}: any) => (
    <TouchableOpacity style={styles.item} onPress={() => handleOnPress(item)}>
      <Icon name="environment" />
      <Text style={styles.description}>{item?.description}</Text>
    </TouchableOpacity>
  );

  const handleOnPress = (item: any) => {
    const query: GooglePlaceQuery = {
      key: apiKey,
      components,
      language,
      placeid: item?.place_id,
    };
    fetchPlaceDetails(query);
  };

  const handleSelectRecentPlace = (item: IPlace) => {
    if (onPressRecentResult) {
      onPressRecentResult(item);
    }
  };

  if (error || placeDetailError) {
    return <Error />;
  }

  const emptyScreen = () => {
    const errorMessage =
      data && data.data?.status !== 'OK'
        ? data.data?.error_message
        : 'No records';
    return <Error errorMessage={errorMessage} />;
  };

  const renderHeader = () => {
    const predictions = data?.data?.predictions;
    if (predictions && predictions.length > 0) {
      return null;
    }
    return <RecentPlaces onPressItem={handleSelectRecentPlace} />;
  };

  return (
    <View style={styles.container}>
      <SearchBar
        style={styles.inputText}
        defaultValue={inputValue}
        placeholder="Where to?"
        showCancelButton={true}
        onChange={handleTextChange}
        cancelText="cancel"
        onCancel={() => {
          if (onCancel) {
            onCancel();
          }
        }}
      />
      <FlatList
        contentContainerStyle={{flex: 1}}
        data={data?.data?.predictions}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={emptyScreen}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
};

export default GooglePlaceAutocomplete;

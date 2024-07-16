import { Button, Icon } from '@ant-design/react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Dimensions, Image, View, Text } from 'react-native';
import { IPlace } from '../../utils/interfaces';
import styles from './styles';
import React, { useRef, useState } from 'react';
import { Region } from './types';
import MapView, { Marker } from 'react-native-maps';
import { Images } from '../../assets/images';

const { width, height } = Dimensions.get('screen');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const initialRegion: Region = {
  latitude: 3.135417, 
  longitude: 101.686127,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA
}

const HomeScreen = () => {
  const mapRef = useRef<MapView | null>(null);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [region, setRegion] = useState<Region>(initialRegion)

  const handlePressSearch = () => {
    navigation.navigate('SearchLocation', {
      onSelectPlace: handleOnSelectPlace,
    });
  };

  const handleOnSelectPlace = (place: IPlace) => {
   const newRegion:Region = {
     latitude: place.geometry.location.lat,
     longitude: place.geometry.location.lng,
     latitudeDelta: LATITUDE_DELTA,
     longitudeDelta: LONGITUDE_DELTA,
     description: place?.description,
   }
   setRegion(newRegion);
   mapRef?.current?.animateToRegion(newRegion);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        style={styles.googleMap}
        provider='google'
        scrollEnabled
        zoomEnabled
        pitchEnabled
        rotateEnabled={false}
        initialRegion={region}
      >
        <Marker coordinate={region}>
          <View style={styles.markerWrapper}>
             {region?.description && (<View style={styles.markerTooltip}><Text numberOfLines={1}>{region?.description}</Text></View>)}
            <Image source={Images.pin} resizeMode='contain' style={styles.markerSize}/>
          </View>
        </Marker>
      </MapView>
      <Button
        type="primary"
        style={styles.buttonSearch}
        onPress={handlePressSearch}
      >
        <Icon name="search" />
      </Button>
    </View>
  );
};

export default HomeScreen;

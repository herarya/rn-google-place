import {View} from 'react-native';
import GooglePlaceAutocomplete from '../../components/GooglePlaceAutocomplete';
import {GoogleLocationDetailResult} from '../../services/google-place-service';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {IPlace} from '../../utils/interfaces';
import {addRecentPlace} from '../../redux/reducers/places';
import {RootStackParamList} from '../../navigators/types/navigation';

const apiKey = "AIzaSyBMOXS4jvG4kkULd1QLMwpbx9oBpmRfoCY";

const SearchLocationScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'SearchLocation'>>();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onResult = (result: GoogleLocationDetailResult) => {
    const {geometry, formatted_address, place_id} = result;
    const place: IPlace = {
      geometry,
      description: formatted_address,
      placeId: place_id,
    };
    dispatch(addRecentPlace(place));
    handleSelectPlace(place);
  };

  const handleSelectPlace = (place: IPlace) => {
    const {onSelectPlace} = route.params;
    if (onSelectPlace) {
      onSelectPlace(place);
    }
    onDismiss();
  };

  const onPressRecentResult = (place: IPlace) => {
    handleSelectPlace(place);
  }

  const onDismiss = () => {
    navigation.goBack();
  };

  return (
    <View style={{flex: 1}}>
      <GooglePlaceAutocomplete
        apiKey={apiKey}
        onDetailResult={onResult}
        onCancel={onDismiss}
        onPressRecentResult={onPressRecentResult}
      />
    </View>
  );
};

export default SearchLocationScreen;

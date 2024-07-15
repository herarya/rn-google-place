import {View} from 'react-native';
import GooglePlaceAutocomplete from '../../components/GooglePlaceAutocomplete';
import {GoogleLocationDetailResult} from '../../services/google-place-service';
import {useNavigation} from '@react-navigation/native';

const SearchLocationScreen = () => {
  const navigation = useNavigation();

  const onResult = (result: GoogleLocationDetailResult) => {
    console.log({result});
    navigation.goBack();
  };

  const onDismiss = () => {
    navigation.goBack();
  };

  return (
    <View style={{flex: 1}}>
      <GooglePlaceAutocomplete
        apiKey="AIzaSyBMOXS4jvG4kkULd1QLMwpbx9oBpmRfoCY"
        onDetailResult={onResult}
        onCancel={onDismiss}
      />
    </View>
  );
};

export default SearchLocationScreen;

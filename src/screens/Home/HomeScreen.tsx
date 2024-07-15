import {Icon} from '@ant-design/react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handlePressSearch = () => {
    navigation.navigate('SearchLocation');
  };
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity style={styles.buttonSearch} onPress={handlePressSearch}>
        <Icon name="search" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

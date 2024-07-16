import React from 'react';
import {Image, Text, View} from 'react-native';
import {Images} from '../../assets/images';
import styles from './styles';
import {PropsType} from './types';

const Error = ({
  errorMessage = 'Unable to load, please try again',
}: PropsType) => {
  return (
    <View style={styles.container}>
      <Image
        source={Images.empty_state}
        resizeMode="cover"
        style={styles.emptyImage}
      />
      <Text style={styles.errorMessage}>{errorMessage}</Text>
    </View>
  );
};

export default Error;

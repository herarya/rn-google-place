import {View, Text} from 'react-native';
import React from 'react';
import {PropsType} from './types';
import styles from './styles';
import {Icon} from '@ant-design/react-native';

const Error = ({
  errorMessage = 'Unable to load, please try again',
}: PropsType) => {
  return (
    <View style={styles.container}>
      <Icon testID="error-icon" name="alert" size={60} />
      <Text style={styles.errorMessage}>{errorMessage}</Text>
    </View>
  );
};

export default Error;

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';
import {RootStackParamList} from './types/navigation';
import SearchLocationScreen from '../screens/SearchLocation/SearchLocationScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Application = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen
          options={{
            presentation: 'modal',
            headerShadowVisible: false,
            title: 'Search Location',
          }}
          name="SearchLocation"
          component={SearchLocationScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Application;

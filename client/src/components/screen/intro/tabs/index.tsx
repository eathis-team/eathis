import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import First from './First';
import Second from './Second';

const navigation = createStackNavigator({
  First: { screen: First },
  Second: { screen: Second }
});

export default navigation;
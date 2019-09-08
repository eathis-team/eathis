import React from 'react';
import { createStackNavigator } from 'react-navigation';
import IntroScreen from './IntroScreen';

export const IntroStackNavigator = createStackNavigator({
  Home: {
    screen: IntroScreen
  }
});
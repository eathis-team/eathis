import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Button } from 'react-native';
import { Icon } from 'native-base';
import { BookmarkTab, SearchTab, MyPageTab, ReviewTab } from './tabs';
import { createMaterialTopTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

interface Props {
  navigation: any;
}

export default class MainScreen extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <Icon name='arrow-back' style={{ paddingLeft: 15 }} onPress={() => navigation.navigate('Intro')} />,
      title: 'Eathis',
      headerRight: <Icon name='ios-notifications' style={{ paddingRight: 15 }}/>
    }
  }

  render() {
    return (
      <AppContainer 
      
      />
    );
  }
}

const AppTabNavigator = createMaterialTopTabNavigator({
  BookmarkTab: { screen: BookmarkTab },
  ReviewTab: { screen: ReviewTab },
  SearchTab: { screen: SearchTab },
  MyPageTab: { screen: MyPageTab }
}, {
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
    style: {
      ...Platform.select({
        ios: {
          backgroundColor:'white',
        }
      })
    },
    iconStyle: { height: 30 },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    upperCaseLabel: false,
    showLabel: false,
    showIcon: true,
  }
});

const AppContainer = createAppContainer(AppTabNavigator);

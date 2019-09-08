import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'native-base';
import { BookmarkTab, SearchTab, MyPageTab, ReviewTab } from './tabs';
import { createMaterialTopTabNavigator } from 'react-navigation';

export const MainTapNavigator = createMaterialTopTabNavigator({
  BookmarkTab: { 
    screen: BookmarkTab,
    navigationOptions: ({
      tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-heart' style={{ color: tintColor }} />
      )
    })
  },
  ReviewTab: { 
    screen: ReviewTab,
    navigationOptions: ({
      tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-add-circle-outline' style={{ color: tintColor }} />
      )
    })
  },
  SearchTab: { 
    screen: SearchTab,
    navigationOptions: ({
      tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-search' style={{ color: tintColor }} />
      )
    })
  },
  MyPageTab: { 
    screen: MyPageTab,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name='md-person' style={{ color: tintColor }} />
      )
    }
  }
}, {
  navigationOptions: ({ navigation }) => ({
    headerLeft: <Icon name='arrow-back' style={{ paddingLeft: 15 }} onPress={() => navigation.navigate('Intro')} />,
    title: 'Eathis',
    headerRight: <Icon name='ios-notifications' style={{ paddingRight: 15 }}/>,
    headerMode: 'screen'
  }),
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
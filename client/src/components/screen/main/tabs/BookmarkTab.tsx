import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

class BookmarkTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='ios-heart' style={{ color: tintColor }} />
    )
  }
  
  render() {
    return (
      <View style={style.container}>
        <Text>BookmarkTab</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  }
});

export default BookmarkTab;
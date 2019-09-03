import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

class ReviewTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='ios-add-circle-outline' style={{ color: tintColor }} />
    )
  }
  
  render() {
    return (
      <View style={style.container}>
        <Text>ReviewTab</Text>
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

export default ReviewTab;
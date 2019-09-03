import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

interface Props {
  navigation: any
}

export default class First extends Component<Props> {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Button
          title="Click!"
          onPress={
            () => navigate("Second", {})
          }
        />
      </View>
    );
  }
}
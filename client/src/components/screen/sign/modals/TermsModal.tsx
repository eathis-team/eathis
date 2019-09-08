import React, { Component } from 'react';
import { View, Icon } from 'native-base';
import { Text, Button, StyleSheet } from 'react-native';

interface Props {
  navigation: any
}

export default class TermsModal extends Component<Props> {
  render() {
    const { container } = style;
    return (
      <View style={container}>
        <Text style={{ fontSize: 20 }}>
          이용 약관
        </Text>
        <Text>
          제1조 [목적]
        </Text>
        <Text>
          제2조 [정의]
        </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: '90%'
  }
})
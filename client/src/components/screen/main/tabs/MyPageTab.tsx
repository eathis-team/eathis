import React, { Component, useState, useEffect, FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';

interface Props {
  navigation: any;
}

const MyPageTab: FunctionComponent<Props> = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View style={style.container}>
      <Text>MyPageTab</Text>
      <Button onPress={() => navigate('Sign', {})}>
        <Text>
          로그인
        </Text>
      </Button>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default MyPageTab;
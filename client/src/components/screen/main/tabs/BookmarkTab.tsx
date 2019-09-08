import React, { FunctionComponent, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  navigation: any;
}

const BookmarkTab: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text>BookmarkTab</Text>
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

export default BookmarkTab;
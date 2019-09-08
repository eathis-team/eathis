import React, { useState, useEffect, FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  navigation: any;
}

const SearchTab: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text>SearchTab</Text>
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

export default SearchTab;
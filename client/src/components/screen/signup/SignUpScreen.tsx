import React, { Component } from 'react';
import { View, Icon } from 'native-base';

export default class SignUpScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <Icon name='arrow-back' style={{ paddingLeft: 15 }} onPress={() => navigation.navigate('Login')} />,
      title: '회원가입'
    }
  }

  render() {
    return (
      <View>
        
      </View>
    )
  }
}
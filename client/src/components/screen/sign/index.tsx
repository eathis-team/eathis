import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignInScreen from '../sign/signIn/SignInScreen';
import SignUpScreen from '../sign/signUp/SignUpScreen';
import SignUpInput from '../sign/signUp/SignUpInput';
import TermsModal from './modals/TermsModal';
import { Icon } from 'native-base';

export const SignStackNavigator = createStackNavigator({
  SignIn: {
    screen: SignInScreen,
    navigationOptions: () => ({
      title: '로그인'
    })
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Icon name='arrow-back' style={{ paddingLeft: 15 }} onPress={() => navigation.navigate('SignIn')} />,
      title: '회원가입'
    })
  },
  SignUpInput: {
    screen: SignUpInput,
    navigationOptions: () => ({
      title: '회원정보 입력'
    })
  }
});
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './src/components/screen/main/MainScreen';
import IntroScreen from './src/components/screen/intro/IntroScreen';
import LoginScreen from './src/components/screen/login/LoginScreen';
import SignUpScreen from './src/components/screen/signup/SignUpScreen';

const AppStackNavigator = createStackNavigator({
  // Intro: {
  //   screen: IntroScreen
  // },
  Login: {
    screen: LoginScreen
  },
  SignUp: {
    screen: SignUpScreen
  },
  Main: {
    screen: MainScreen // MainScreen 컴포넌트를 네비게이터에 등록
  }
});

export default createAppContainer(AppStackNavigator);
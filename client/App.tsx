import React from 'react';
import { createStackNavigator, createNavigationContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { Icon } from 'native-base';
import { createStore } from 'redux';
import reducers from './src/reducers/';
import TermsModal from './src/components/screen/sign/modals/TermsModal';
import {
  SignStackNavigator, IntroStackNavigator, MainTapNavigator
} from './src/components/screen';

const ModalStackNavigator = createStackNavigator({
  TermsModal: {
    screen: TermsModal,
    navigationOptions: ({ navigation }) => ({
      title: '이용약관',
      headerRight: <Icon name='ios-close' style={{ paddingRight: 15 }} onPress={() => navigation.goBack(null)} />,
      headerMode: 'screen'
    })
  }
}, {
  mode: 'modal',
  headerMode: 'screen'
});

const AppStackNavigator = createStackNavigator(
  {
    Main: MainTapNavigator
  }
)

const RootStackNavigator = createStackNavigator(
  {
    Main: AppStackNavigator,
    Intro: IntroStackNavigator,
    Sign: SignStackNavigator,
    Modal: ModalStackNavigator
  }, {
    mode: 'modal',
    headerMode: 'none'
  }
)

const NavigationContainer = createNavigationContainer(RootStackNavigator);

const store = createStore(reducers);
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
}

export default App;
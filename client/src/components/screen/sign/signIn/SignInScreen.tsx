import React, { Component } from 'react';
import { StyleSheet, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Container, Button, Text, Form, Item, Input, View, Icon, Content } from 'native-base';
import BottomFullButton from '../../../button/BottomFullButton';

interface Props {
  navigation: any
}

interface State {
  userId: string
  userPw: string
}

export default class SignInScreen extends Component<Props> {
  state: State = {
    userId: '' || null,
    userPw: '' || null
  }
  
  //  TODO: Login Process
  _loginProcess = () => {
    const url = 'http://192.168.0.17:9999/test';
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(this.state)
    }

    fetch(url, options)
      .then(res => console.log(res)).catch(err => console.error(err));
  }

  handleFormChange = (name: string) => (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    this.setState({ [name]: e.nativeEvent.text })
  }

  render() {
    const { navigate } = this.props.navigation;
    const { container, button, top, form, item, content } = style;
    return (
      <View style={container}>
        <Content>
          <View style={top}>
            <Button light style={button} onPress={this._loginProcess}>
              <Text>네이버 로그인</Text>
            </Button>
            <Button light style={button} onPress={this._loginProcess}>
              <Text>페이스북 로그인</Text>
            </Button>
            <Button light style={button} onPress={this._loginProcess}>
              <Text>구글 로그인</Text>
            </Button>
            <Button light style={button} onPress={this._loginProcess}>
              <Text>카카오톡 로그인</Text>
            </Button>
          </View>

          <View style={form}>
            <Item style={item}>
              <Input placeholder='E-mail' onChange={this.handleFormChange('userId')} />
            </Item>
            <Item style={item}>
              <Input placeholder='Password' onChange={this.handleFormChange('userPw')} />
            </Item>

            <View style={content}>
              <Text style={{color: 'gray'}}>아직 Eat This의 회원이 아니신가요?</Text>
              <Text onPress={() => navigate('SignUp', {})} style={{textAlign: 'right', textDecorationLine: 'underline'}}>
                회원가입
              </Text>
            </View>

            <View style={content}>
              <Text style={{color: 'gray'}}>비밀번호가 기억나지 않으시나요?</Text>
              <Text onPress={() => navigate('SignUp', {})} style={{textAlign: 'right', textDecorationLine: 'underline'}}>
                비밀번호 찾기
              </Text>
            </View>
          </View>
        </Content>
        
        <BottomFullButton name='로그인하기' addPressEvent={this._loginProcess} />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    flex: 2
  },
  form: {
    flex: 3,
    padding: 10
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 5
  },
  item: {
    marginTop: 5,
    marginBottom: 5
  }
});

import React, { Component } from 'react';
import { View, Icon, Item, Input, Text, CheckBox, Button } from 'native-base';
import style from './SignUpScreenCss';
import { NativeSyntheticEvent, TextInputChangeEventData, GestureResponderEvent } from 'react-native';
import BottomFullButton from '../../../button/BottomFullButton';

interface Props {
  navigation: any;
}

export default class SignUpScreen extends Component<Props> {
  state = {
    first: false,
    second: false,
    third: false
  }

  handleFormChange = (name: string) => (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {

  }

  handleCheckedChange = (name: string) => (e: GestureResponderEvent): void => {
    this.setState({ [name]: !this.state[name] });
  }

  _signupProcess = (): void => {
    this.props.navigation.navigate('SignUpInput')
  }

  render() {
    const { container, form, content, item } = style;
    const { navigate } = this.props.navigation;

    return (
      <View style={container}>
        <View style={form}>
          <Item style={item}>
            <Input placeholder='E-mail Address' onChange={this.handleFormChange('userId')} />
          </Item>
          <Item style={item}>
            <Input placeholder='Password' onChange={this.handleFormChange('userPw')} />
          </Item>
          <Item style={item}>
            <Input placeholder='Password Check' onChange={this.handleFormChange('userPw')} />
          </Item>
          <Text style={{color: 'gray'}}>
            * 비밀번호는 영문/숫자조합으로 8자리 이상으로 설정해주세요.
          </Text>

          <View style={Object.assign({}, content, { marginTop: 30 })}>
            <CheckBox checked={this.state.first} onPress={this.handleCheckedChange('first')} />
            <Text onPress={() => navigate('TermsModal', {})} style={{marginLeft: 15, textAlign: 'right', textDecorationLine: 'underline'}}>
              이용약관
            </Text>
            <Text style={{color: 'gray'}}>에 동의합니다.</Text>
          </View>

          <View style={content}>
            <CheckBox checked={this.state.second} onPress={this.handleCheckedChange('second')} />
            <Text onPress={() => navigate('SignUp', {})} style={{marginLeft: 15, textAlign: 'right', textDecorationLine: 'underline'}}>
              개인정보 처리방침
            </Text>
            <Text style={{color: 'gray'}}>에 동의합니다.</Text>
          </View>
          
          <View style={content}>
            <CheckBox checked={this.state.third} onPress={this.handleCheckedChange('third')} />
            <Text onPress={() => navigate('SignUp', {})} style={{marginLeft: 15, textAlign: 'right', textDecorationLine: 'underline'}}>
              위치기반 서비스 이용
            </Text>
            <Text style={{color: 'gray'}}>에 동의합니다.</Text>
          </View>
        </View>
        
        <BottomFullButton name='가입하기' addPressEvent={this._signupProcess} />
      </View>
    )
  }
}
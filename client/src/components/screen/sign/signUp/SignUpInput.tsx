import React, { FunctionComponent, useState, useEffect } from 'react';
import { style } from './SignUpInputCss';
import { Picker } from 'react-native';
import { View, Text, Item, Input, InputGroup, Button } from 'native-base';
import BottomFullButton from '../../../button/BottomFullButton';

interface Props {
  navigation: any;
}

const SignUpInput: FunctionComponent<Props> = ({ navigation }) => {
  const [ nickname, setNickname ] = useState<string>('');
  const [ gender, setGender ] = useState<string>('');
  const [ birthday, setBirthday ] = useState<string>('');

  const _signUpProcess = (): void => {

  }

  const { container, form, content, item } = style;
  return (
    <View style={container}>
      <View style={form}>
        <Picker selectedValue={gender} onValueChange={(e) => setGender(e)}>
          <Picker.Item  label="남" value={'1'} />
          <Picker.Item  label="여" value={'0'} />
        </Picker>
        <Item style={item}>
          <Input placeholder='닉네임 (최대 10자)' onChange={(e) => setNickname(e.nativeEvent.text)} />
        </Item>
        <Item style={item}>
          <Input placeholder='성별' onChange={(e) => setGender(e.nativeEvent.text)} />
        </Item>
        <Item style={item}>
          <Input placeholder='생년월일' onChange={(e) => setBirthday(e.nativeEvent.text)} />
        </Item>
      </View>
      
      <BottomFullButton name='완료' addPressEvent={_signUpProcess} />
    </View>
  );
}

export default SignUpInput;
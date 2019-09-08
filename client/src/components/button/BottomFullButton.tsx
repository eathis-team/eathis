import React, { FunctionComponent } from 'react';
import { Button, Text } from 'native-base';

interface Props {
  name: string;
  addPressEvent: any;
}

const BottomFullButton: FunctionComponent<Props> = ({ name, addPressEvent }) => {
  return (
    <Button full dark style={{height: '10%'}} onPress={addPressEvent}>
      <Text style={{fontSize: 20}}>{name}</Text>
    </Button>
  );
}

export default BottomFullButton;
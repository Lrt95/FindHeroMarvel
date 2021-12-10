import React from 'react';
import { Button, Text, useTheme } from "react-native-paper";
import {View} from 'react-native';

function ReadMe({ navigation }) {
  const theme = useTheme();
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.background}}>
      <Text>Hello World</Text>
    </View>
  );
}

export default ReadMe;

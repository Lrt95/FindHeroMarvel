import * as React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

function Description({navigation, route}) {
  return (
    <View>
      {console.log(route)}
      <Text>Hello Description</Text>
    </View>
  );
}

export default Description;

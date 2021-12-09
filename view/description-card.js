import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {Card, Text} from 'react-native-paper';

export function DescriptionCard(props) {
  return (
    <Card style={styles.card} horizontal={true}>
      <Text>{props.name}</Text>
      <FlatList
        horizontal
        data={props.data}
        renderItem={({item, index}) => {
          return (
            <View>
              <Text style={styles.cardText} ref={index}>
                {item.name}
              </Text>
            </View>
          );
        }}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    height: 80,
    margin: 5,
    borderRadius: 10,
  },
  cardText: {
    paddingRight: 10,
    paddingTop: 10,
    textAlign: 'center',
    width: 150,
    height: 100,
  },
});

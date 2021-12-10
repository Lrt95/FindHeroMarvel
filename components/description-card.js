import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {Card, Text} from 'react-native-paper';

function Element(props: {item: any, ref: number}) {
  return (
    <View style={{alignItems: 'center', flex: 1}}>
      <Image
        style={{width: 140, height: 100, resizeMode: 'stretch'}}
        source={{uri: props.item.image}}
      />
      <Text style={styles.cardText}>
        {props.item.name}
      </Text>
    </View>
  );
}

export function DescriptionCard(props) {
  return (
    <Card style={styles.card} horizontal={true}>
      <Card.Title title={props.name} />
      <Card.Content>
        <FlatList
          style={{flex: 1}}
          horizontal
          data={props.data}
          renderItem={({item, index}) => {
            return <Element item={item} />;
          }}
        />
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderWidth: 5,
    borderColor: 'black',
    margin: 5,
    flex: 1,
  },
  cardText: {
    paddingRight: 10,
    paddingTop: 10,
    textAlign: 'center',
    width: 150,
    height: 100,
  },
});

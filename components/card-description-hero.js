import {Card, Text, Title} from 'react-native-paper';
import { Image, StyleSheet, View } from "react-native";
import * as React from 'react';

function CardDescriptionHero(props: {favIcon: any, hero: undefined}) {
  return (
    <Card style={styles.containerCard}>
      <View
        style={{
          margin: 5,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Title>Description</Title>
        {props.favIcon}
      </View>
      <Card.Content style={{flex: 1, flexDirection: 'row'}}>
        <Image style={styles.image} source={{uri: props.hero.image}} />
        <Text style={styles.description}>{props.hero.description}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    flex: 1,
    margin: 5,
    borderWidth: 5,
    borderColor: 'black',
  },
  image: {
    resizeMode: 'stretch',
    flex: 1,
  },
  description: {
    padding: 5,
    textAlign: 'justify',
    flex: 2,
  },
});
export default CardDescriptionHero;

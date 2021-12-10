import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Card, Text, Title} from 'react-native-paper';

function FlatListCard(props) {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('Description', {id: props.id})}
      style={styles.container}>
      <Card style={styles.containerCard}>
        <Card.Content style={styles.containerContent}>
          <View style={styles.containerImage}>
            <Image style={styles.image} source={{uri: props.image}} />
          </View>
          <View style={styles.containerDescription}>
            <Title>{props.name}</Title>
            <Text style={styles.txtDescription} numberOfLines={6}>
              {props.description}
            </Text>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    flexDirection: 'row',
    margin: 5,
  },
  containerCard: {
    flex: 1,
    borderWidth: 5,
    borderColor: 'black',
  },
  containerContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerImage: {flex: 1, marginRight: 5},
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
  },
  containerDescription: {flex: 2},
  txtName: {
    fontSize: 20,
  },
  txtDescription: {
    color: '#777',
  },
});

export default FlatListCard;

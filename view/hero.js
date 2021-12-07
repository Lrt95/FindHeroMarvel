import React, {useState} from 'react';
import {TouchableOpacity ,Image, View, StyleSheet, FlatList, StatusBar, ScrollView} from 'react-native';
import { Button, Card, Title, Paragraph, Text, List, Modal, Portal } from 'react-native-paper';
import { ListItem, Avatar } from 'react-native-elements';


function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <TouchableOpacity onPress={()=> {
          console.log('BIMbiiiim detail');
        }
      }>
      <Image source={{uri:item.photo}}  style={{width:90, height:90}} />
    </TouchableOpacity>
    <View style={{alignItems:"center",flex:1}}>
      <Text style={{fontWeight:"bold"}}>{item.name}</Text>
      <Text>{item.description}</Text>
    </View>
  </View>
);
}

export default class hero extends React.Component {
  state = {
    data:[
      {
        "name": "Batman",
        "description": " ",
        "photo": "https://i.annihil.us/u/prod/marvel/i/mg/3/b0/526955e3c7c41/portrait_medium.jpg"
      },
      {
        "name": "Superman",
        "description": " ",
        "photo": "http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_medium.jpg"
      },
      {
        "name": "Captain",
        "description": "Blablabla",
        "photo": "https://i.annihil.us/u/prod/marvel/i/mg/3/b0/526955e3c7c41/portrait_medium.jpg"
      },
      {
        "name": "Spider-Man",
        "description": "hahahaha",
        "photo": "https://i.annihil.us/u/prod/marvel/i/mg/3/b0/526955e3c7c41/portrait_medium.jpg"
      },
      {
        "name": "HULK",
        "description": "Brrrahhhh",
        "photo": "https://i.annihil.us/u/prod/marvel/i/mg/3/b0/526955e3c7c41/portrait_medium.jpg"
      },
      {
        "name": "Iron Man",
        "description": "Brrrahhhh",
        "photo": "https://i.annihil.us/u/prod/marvel/i/mg/3/b0/526955e3c7c41/portrait_medium.jpg"
      },
      {
        "name": "Black Window",
        "description": "Brrrahhhh",
        "photo": "https://i.annihil.us/u/prod/marvel/i/mg/3/b0/526955e3c7c41/portrait_medium.jpg"
      },
      {
        "name": "Thor",
        "description": "Brrrahhhh",
        "photo": "https://i.annihil.us/u/prod/marvel/i/mg/3/b0/526955e3c7c41/portrait_medium.jpg"
      }
    ]
  }

  render(){
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#D7D7D7",
    width:"90%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  }
});

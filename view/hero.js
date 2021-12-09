import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useEffect, useState} from 'react';
import {getUriFromCamera} from '../helpers/camera';
import {getFindMyHero} from '../services/fhm.service';

function Hero({route, navigation}) {
  const [fileUri, setFileUri] = useState(
    'https://cdn.onlinewebfonts.com/svg/img_181369.png',
  );
  const [nameHero, setNameHero] = useState('');
  const [descriptionHero, setDescriptionHero] = useState('');

  function launchCamera() {
    getUriFromCamera().then(result => {
      if (result.assets) {
        result.assets.forEach(asset => {
          setFileUri(asset.uri);
        });
      }
    });
  }

  useEffect(() => {
    navigation.setParams({name: nameHero});
  }, [nameHero, navigation]);

  function handleFindHero() {
    getFindMyHero().then(heroes => {
      if (heroes.length > 0) {
        heroes.forEach(hero => {
          setFileUri(hero.image);
          setNameHero(hero.name);
          setDescriptionHero(hero.description);
        });
      }
    });
  }

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={() => launchCamera()}>
        Prendre une photo
      </Button>
      <Image
        style={styles.image}
        source={{
          uri: fileUri,
        }}
      />
      <Text style={styles.title}>{nameHero}</Text>
      <Text style={styles.description}>{descriptionHero}</Text>
      <Button mode="contained" onPress={() => handleFindHero()}>
        C'est parti !
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    
    
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'stretch',
    margin: 12,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 25,
    
  },
  description:{
    // fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',

  },
});

export default Hero;

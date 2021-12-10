import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Button, Text, useTheme} from 'react-native-paper';
import {useEffect, useState} from 'react';
import {getUriFromCamera} from '../helpers/camera';
import {getFindMyHero} from '../services/fhm.service';

function Hero({route, navigation}) {
  const [fileUri, setFileUri] = useState(
    'https://cdn.onlinewebfonts.com/svg/img_181369.png',
  );
  const [nameHero, setNameHero] = useState('');
  const [id, setId] = useState('');
  const [isPhoto, setIsPhoto] = useState(true);
  const [isIAm, setIsIam] = useState(false);
  const theme = useTheme();

  function launchCamera() {
    getUriFromCamera().then(result => {
      if (result.assets) {
        result.assets.forEach(asset => {
          setFileUri(asset.uri);
        });
        setIsPhoto(false);
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
          setId(hero.id);
        });
        setIsIam(true);
      }
    });
  }

  function handleRedirect() {
    navigation.navigate('Description', {id});
  }

  function switchButton() {
    return isIAm ? (
      <>
        <Button mode="contained" onPress={() => handleRedirect()}>
          Voir la fiche héro
        </Button>
      </>
    ) : (
      <>
        <Button
          disabled={isPhoto}
          mode="contained"
          onPress={() => handleFindHero()}>
          Je suis ?
        </Button>
      </>
    );
  }

  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        backgroundColor: theme.colors.background,
      }}>
      <Image
        style={styles.image}
        source={{
          uri: fileUri,
        }}
      />
      <View style={{flex: 1, justifyContent: 'space-around'}}>
        <View>
          <Button mode="contained" onPress={() => launchCamera()}>
            Prendre une photo
          </Button>
        </View>
        <View>{switchButton()}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 400,
    resizeMode: 'stretch',
  },
});

export default Hero;

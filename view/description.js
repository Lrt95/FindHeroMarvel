import * as React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native-paper';
import {getComicsMarvel, getHeroMarvel} from '../services/fhm.service';
import {useCallback, useEffect, useState} from 'react';
import {DescriptionCard} from './description-card';

function Description() {
  const [hero, setHero] = useState('');
  const [comics, setComics] = useState('');
  const loadHeroesData = useCallback(async () => {
    const res = await getHeroMarvel(1009146);
    setHero(res[0]);
    const comic = await getComicsMarvel(1009146);
    setComics(comic[0]);
  }, []);

  useEffect(() => {
    loadHeroesData();
  }, [loadHeroesData]);

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        {/*<Text style={styles.name}>{data.name}</Text>*/}
        <Image style={styles.image} source={{uri: hero.image}} />
        <Text style={styles.description}>{hero.description}</Text>
      </View>
      {/*<TouchableOpacity onPress={console.log('button was pressed')}>*/}
      {/*  <Image*/}
      {/*    style={styles.icon}*/}
      {/*    source={{*/}
      {/*      uri: 'https://w7.pngwing.com/pngs/546/222/png-transparent-coloring-book-emoji-heart-drawing-the-heart-icon-love-child-color-thumbnail.png',*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</TouchableOpacity>*/}
      <View>
        <ScrollView>
          <DescriptionCard data={hero.name} name="Comics" />
          <DescriptionCard data={hero.series} name="Series" />
          <DescriptionCard data={hero.stories} name="Stories" />
          <DescriptionCard data={hero.events} name="Events" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: -30,
  },
  name: {
    textAlign: 'center',
    fontSize: 20,
    padding: 5,
  },
  image: {
    width: 100,
    height: 140,
    padding: 5,
    flex: 1,
  },
  description: {
    padding: 5,
    textAlign: 'justify',
    flex: 3,
  },
});

export default Description;

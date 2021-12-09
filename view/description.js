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
import {getHeroMarvel} from '../services/fhm.service';
import {useCallback, useEffect, useState} from 'react';
import {DescriptionCard} from './description-card';

function Description() {
  const [data, setData] = useState('');
  const loadData = useCallback(async () => {
    const res = await getHeroMarvel(1009146);
    setData(res[0]);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        {/*<Text style={styles.name}>{data.name}</Text>*/}
        <Image style={styles.image} source={{uri: data.image}} />
        <Text style={styles.description}>{data.description}</Text>
      </View>
      <TouchableOpacity>
        <Image
          style={styles.icon}
          source={{
            uri: 'https://w7.pngwing.com/pngs/546/222/png-transparent-coloring-book-emoji-heart-drawing-the-heart-icon-love-child-color-thumbnail.png',
          }}
        />
      </TouchableOpacity>
      <View>
        <ScrollView>
          <DescriptionCard data={data.comics} name="Comics" />
          <DescriptionCard data={data.series} name="Series" />
          <DescriptionCard data={data.stories} name="Stories" />
          <DescriptionCard data={data.events} name="Events" />
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

import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {getHeroMarvel} from '../services/fhm.service';
import {useCallback, useEffect, useState} from 'react';

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
    <View>
      <Text style={styles.name}>{data.name}</Text>
      <Image style={styles.image} source={{uri: data.image}} />
      <Text style={styles.description}>{data.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    textAlign: 'center',
    fontSize: 20,
    padding: 5,
  },
  image: {
    width: 100,
    height: 140,
    alignSelf: 'center',
    padding: 5,
  },
  description: {
    padding: 5,
    textAlign: 'justify',
  },
});

export default Description;

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
import {DescriptionCard} from '../components/description-card';
import {useDispatch, useSelector} from 'react-redux';
import { addLike, disLike } from "../store/reducer/user-reducer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function Description({navigation, route}) {
  const [hero, setHero] = useState('');
  const [comics, setComics] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  const loadHeroesData = useCallback(async () => {
    console.log(route.params.id);
    const res = await getHeroMarvel(route.params.id);
    setHero(res[0]);
    // const comic = await getComicsMarvel(1009146);
    getComicsMarvel(route.params.id)
      .then(result => {
        setComics(result);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    loadHeroesData();
  }, [loadHeroesData]);

  function handleLike() {
    dispatch(addLike(route.params.id));
  }

  function handleDisLike() {
    dispatch(disLike(route.params.id));
  }

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        {/*<Text style={styles.name}>{data.name}</Text>*/}
        <Image style={styles.image} source={{uri: hero.image}} />
        <Text style={styles.description}>{hero.description}</Text>
      </View>
      {user.likes.includes(route.params.id) ? (
        <TouchableOpacity onPress={handleDisLike}>
          <MaterialCommunityIcons name="heart" size={50} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleLike}>
          <MaterialCommunityIcons name="heart-outline" size={50} />
        </TouchableOpacity>
      )}
      <View>
        <ScrollView>
          <DescriptionCard data={comics} name="Comics" />
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

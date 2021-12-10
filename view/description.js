import * as React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {
  getComicsMarvel,
  getEventsMarvel,
  getHeroMarvel,
  getSeriesMarvel,
} from '../services/fhm.service';
import {useCallback, useEffect, useState} from 'react';
import {DescriptionCard} from '../components/description-card';
import {useDispatch, useSelector} from 'react-redux';
import {addLike, disLike} from '../store/reducer/user-reducer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CardDescriptionHero from '../components/card-description-hero';
import Spinner from '../components/spinner';

function Description({navigation, route}) {
  const [hero, setHero] = useState({});
  const [comics, setComics] = useState([]);
  const [series, setSeries] = useState([]);
  const [events, setEvents] = useState([]);
  const [isLoaded, setIsloaded] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const theme = useTheme();

  const loadHeroesData = useCallback(async () => {
    getHeroMarvel(route.params.id).then(result => {
      if (result.length > 0) {
        setHero(result[0]);
      }
    });
    getComicsMarvel(route.params.id)
      .then(result => {
        if (result.length > 0) {
          setComics(result);
        }
      })
      .catch(error => {
        console.log(error);
      });

    getSeriesMarvel(route.params.id)
      .then(result => {
        if (result.length > 0) {
          setSeries(result);
        }
      })
      .catch(error => {
        console.log(error);
      });

    getEventsMarvel(route.params.id)
      .then(result => {
        if (result.length > 0) {
          setEvents(result);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    loadHeroesData();
  }, [loadHeroesData]);

  useEffect(() => {
    navigation.setParams({name: hero.name});
  }, [hero, navigation]);

  useEffect(() => {
    setIsloaded(true);
  }, [hero, events, series, comics]);

  function handleLike() {
    dispatch(addLike(route.params.id));
  }

  function handleDisLike() {
    dispatch(disLike(route.params.id));
  }

  function favIcon() {
    return (
      <>
        {user.likes.includes(route.params.id) ? (
          <TouchableOpacity onPress={handleDisLike}>
            <MaterialCommunityIcons name="heart" size={50} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleLike}>
            <MaterialCommunityIcons name="heart-outline" size={50} />
          </TouchableOpacity>
        )}
      </>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.background}}>
      {isLoaded ? (
        <>
          <CardDescriptionHero favIcon={favIcon()} hero={hero} />
          <View style={{flex: 2}}>
            <ScrollView>
              {comics.length > 0 ? (
                <DescriptionCard data={comics} name="Comics" />
              ) : null}
              {series.length > 0 ? (
                <DescriptionCard data={series} name="Series" />
              ) : null}
              {events.length > 0 ? (
                <DescriptionCard data={events} name="Events" />
              ) : null}
            </ScrollView>
          </View>
        </>
      ) : (
        <Spinner />
      )}
    </View>
  );
}

export default Description;

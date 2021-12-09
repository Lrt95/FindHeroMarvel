import React, {useEffect, useMemo, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {
  Card,
  Divider,
  FAB,
  Text,
  TextInput,
  Title,
  useTheme,
} from 'react-native-paper';
import {getAllHeroesMarvel} from '../services/fhm.service';
import Spinner from '../components/spinner';
import FlatListCard from '../components/flat-list-card';

const Home = ({navigation}) => {
  const [heroes, setHeroes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = React.useState('');
  const theme = useTheme();

  useEffect(() => {
    getHeroes();
  }, []);

  const heroesFiltered = useMemo(() => {
    return heroes.filter(hero => hero.name.includes(search));
  }, [heroes, search]);

  const getHeroes = () => {
    if (!isLoading) {
      setIsLoading(true);
      getAllHeroesMarvel(currentPage, 100)
        .then(result => {
          setHeroes([...heroes, ...result]);
          setIsLoading(false);
          setCurrentPage(currentPage + 100);
        })
        .catch(error => {
          setIsLoading(false);
          console.log(error);
        });
    }
  };

  const renderLoader = () => {
    return isLoading ? <Spinner /> : null;
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.background}}>
      <FAB
        label={'Quel(le) héro(ine) je suis ?'}
        style={styles.fab}
        small
        onPress={() => navigation.navigate('Hero', {name: null})}
      />
      <TextInput
        style={{margin: 5, backgroundColor: 'white'}}
        dense
        label={'Recherche'}
        theme={{colors: 'black'}}
        mode={'outlined'}
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        style={{marginTop: 5}}
        data={heroesFiltered}
        renderItem={({item}) => (
          <FlatListCard
            id={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
            navigation={navigation}
          />
        )}
        keyExtractor={(item, index) => item.name + index}
        ListFooterComponent={renderLoader}
        onEndReached={getHeroes}
        onEndReachedThreshold={20}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textView: {
    justifyContent: 'space-around',
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
  },
  fab: {
    zIndex: 10,
    position: 'absolute',
    margin: 16,
    bottom: 0,
    right: 0,
  },
  inputSearch: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Home;

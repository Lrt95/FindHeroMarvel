import React, {useEffect, useMemo, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {FAB, Text} from 'react-native-paper';
import {getAllHeroesMarvel} from '../services/fhm.service';

const Home = ({navigation}) => {
  const [heroes, setHeroes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = React.useState('');

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

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Description', {id: item.id})}
        style={styles.container}>
        <Image style={styles.image} source={{uri: item.image}} />
        <View style={styles.textView}>
          <Text style={styles.txtName}>{`${item.name}`}</Text>
          <Text style={styles.txtDescription}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  return (
    <View>
      <FAB
        label={'Quel(le) héro(ine) je suis ?'}
        style={styles.fab}
        small
        onPress={() => navigation.navigate('Hero', {name: null})}
      />
      <TextInput
        onChangeText={setSearch}
        value={search}
        style={styles.inputSearch}
        placeholder="Recherche"
      />
      <FlatList
        data={heroesFiltered}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.name + index}
        ListFooterComponent={renderLoader}
        onEndReached={getHeroes}
        onEndReachedThreshold={20}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 35,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
    resizeMode: 'stretch',
  },
  textView: {
    justifyContent: 'space-around',
  },
  txtName: {
    fontSize: 20,
  },
  txtDescription: {
    color: '#777',
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    left: 0,
    top: 0,
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

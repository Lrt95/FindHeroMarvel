import React from 'react';
import {Text, useTheme} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';

function ReadMe({navigation}) {
  const theme = useTheme();

  function styledText(text) {
    return (
      <View style={{marge: 5}}>
        <Text style={{color: theme.colors.primary}}>{text}</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.background}}>
      <Text style={styles.paraOne}>Projet FindHeroMarvel</Text>

      <Text style={styles.paraTwo}>
        Ce projet consiste a répertorié une partie des super-héros de l'univers
        Marvel. De Captain America en passant par Black Panther à Iron Man. Vous
        retrouverez à partir d'une liste vos super-héros favoris. Pour en savoir
        plus sur le personnage, il faudra cliquer dessus pour découvrir la
        description, l'image mais aussi les apparitions dans les comics et
        séries. L'API utilisé est The Marvel Comics API :
        https://developer.marvel.com/documentation/getting_started
      </Text>
      <Text style={styles.prenom}>
        Cet application a été crée par Antony Correia, Marion Meurant, Souhayl
        Bendro et Maxime Lamy.
      </Text>

      <Text style={styles.paraThree}>
        Pour nous aider, nous avons utilisés les modules :
        {styledText('react-native-async-storage/async-storage')}
        {styledText('@react-navigation/bottom-tabs')}
        {styledText('@react-navigation/native')}
        {styledText(' @react-navigation/stack')}
        {styledText('@reduxjs/toolkit')}
        {styledText('axios ')}
        {styledText(' crypto-js')}
        {styledText(' firebase ')}
        {styledText(' formik ')}
        {styledText('react')}
        {styledText('react-native-image-picker')}
        {styledText(' react-native-gesture-handler')}
        {styledText(' react-native-keyboard-aware-scroll-view  ')}
        {styledText(' react-native-paper ')}
        {styledText('react-native-safe-area-context')}
        {styledText('react-native-screens ')}
        {styledText(' react-native-vector-icons ')}
        {styledText('react-redux')}
        {styledText('redux-persist ')}
        {styledText(' yup ')}
      </Text>

      <Text style={styles.paraFour}>
        Concernant les fonctionnalités, l'utilisateur peut s'inscrire et se
        connecter pour rejoindre la home de l'application. La home est la liste
        des super-héros, avec une ScrollView infinie, qui permet de charger
        chaque héros par ordre alphabétique. Pour choisir son héros, il y a une
        barre de recherche pour filtrer et ainsi trouver le héros qu'on chercher
        sans passer par le scroll. L'utilisateur clique sur un personnage et
        tombe directement sur une fiche du personnage : Image, description,
        comics d'apparition et une icone de like pour enregistrer ses
        personnages Favoris. Une déconnexion est aussi accessible.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  paraOne: {
    margin: 5,
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  prenom: {
    fontSize: 15,
    marginBottom: 30,
    lineHeight: 20,
    color: 'white',
  },

  paraTwo: {
    fontSize: 15,
    marginBottom: 30,
    lineHeight: 20,
    color: 'white',
  },

  paraThree: {
    fontSize: 15,
    marginBottom: 30,
    lineHeight: 20,
    color: 'white',
  },

  paraFour: {
    fontSize: 15,
    marginBottom: 30,
    lineHeight: 20,
    color: 'white',
  },
});

export default ReadMe;

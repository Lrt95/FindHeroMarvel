import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, StatusBar } from "react-native";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = () => {
    setIsLoading(true);
    axios.get(`https://randomuser.me/api/?page=${currentPage}&results=10`)
      .then(res => {
        setUsers([...users, ...res.data.results]);
        setIsLoading(false);
      });
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: item.picture.large }} />
        <View style={styles.textView}>
          <Text style={styles.txtName}>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
          <Text style={styles.txtDescription}>{item.email}</Text>
        </View>
      </View>
      
    );
  };

  const renderLoader = () => {
    return (
      isLoading ?
        <View style={styles.loaderStyle}>
          <ActivityIndicator size="large" color="#aaa" />
        </View> : null
    );
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  return (
    <>
      <StatusBar backgroundColor="#000" />
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.email}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 35,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  textView: {
    justifyContent: "space-around",
  },
  txtName: {
    fontSize: 20,
  },
  txtDescription: {
    color: "#777",
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },
});

export default Home;
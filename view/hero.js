import React, {Component} from 'react';
import {View, FlatList, Image, ImageBackground, StyleSheet} from 'react-native';
import {ActivityIndicator, Text} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';


class hero extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            page: 1,
            isLoading: false
        }
    }

    componentDidMount() {
        const apiUrl = "https://jsonplaceholder.typicode.com/photos?_limit=10&_page=1"
        fetch(apiUrl).then(res => res.json())
            .then(resJosn => {
                this.setState({data: resJosn})
            })
    }

    renderView = ({item}) => {
        return (
            <ImageBackground
                source={{uri: item.thumbnailUrl}}
                style={styles.img}>
                <Text> {item.id} </Text>
                <Text> {item.title} </Text>
            </ImageBackground>
        )
    }

    handleLoadMore = async () => {
        await this.setState({page: this.state.page + 1, isLoading: true})
        const apiUrl = "https://jsonplaceholder.typicode.com/photos?_limit=10&_page=" + this.state.page
        fetch(apiUrl).then(res => res.json())
            .then(resJosn => {
                this.setState({data: this.state.data.concat(resJosn), isLoading: false})
            })
    }

    footerList = () => {
        return (
            <View>
                <ActivityIndicator color={Colors.red800} loading={this.state.isLoading} size={large}/>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.flat}
                    data={this.state.data}
                    renderItem={this.renderView}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={this.handleLoadMore}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    img: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
        paddingBottom: 60,
        height: 120,
        width: 350,
        borderWidth: 1,
    },
    flat: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})


export default hero;

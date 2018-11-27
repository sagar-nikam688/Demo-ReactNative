import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
export default class Homescreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            movies: []
        }
    }

    componentDidMount() {
        console.log('callled')
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    movies: responseJson.movies,
                }, function () {

                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <ScrollView style={[styles.container,]} >
                {this.state.movies.map(item => this._renderList(item.title))}
            </ScrollView>
        );
    }

    _renderList = (title) => {
        console.log(title)
        return (
            <TextLabel textLabel={title} />
        )
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textViewStyle: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    x: {
        fontSize: 18,
    }
});


export class TextLabel extends Component {
    constructor(Props) {
        super(Props);
    }
    render() {
        let isScure = this.props.isSecure
        return (
            <View style={styles.textViewStyle}>
                <Text
                    style={styles.Textstyle}>
                    {this.props.textLabel}
                </Text>
            </View>
        );
    }
}

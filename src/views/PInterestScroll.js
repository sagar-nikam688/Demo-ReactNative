import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, ActivityIndicator, FlatList, Image } from 'react-native';
import { Container, Header, Title, Body, Right, Icon, Button, Item, Input, Left } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';

export default class PInterestScroll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            pItems: []
        }
    }

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon type="Entypo" name="pinterest" style={{ fontSize: 23, color: tintColor }} />
        )
    }

    componentDidMount() {
        console.log('callled')
        return fetch('https://demo6231795.mockable.io')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    pItems: responseJson.resource_data_cache[0].data.results,
                }, function () {

                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <Container style={{ flex: 1, }}>
                <Header>
                    <Left>
                        <Button transparent >
                            <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>ScrollView</Title>
                    </Body>
                    <Right>
                        <Button transparent >
                            <Icon name='search' onPress={this.displayAlert} />
                        </Button>
                    </Right>
                </Header>
                <ScrollView style={{ flex: 1, backgroundColor: 'blue' }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 2, backgroundColor: 'powderblue', alignItems: 'center' }}>
                            {this.state.pItems.map((anObjectMapped) => this._renderList1(anObjectMapped), key = "title")}
                        </View>
                        <View style={{ flex: 2, backgroundColor: 'skyblue', alignItems: 'center' }}>
                            {this.state.pItems.reverse().map((anObjectMapped) => this._renderList2(anObjectMapped), key = "title")}
                        </View>
                    </View>
                </ScrollView>
            </Container>
        )
    }

    _renderList1 = (anObjectMapped) => {
        console.log(anObjectMapped.domain)
        return (
            <View style={{ alignItems: 'center' }}>
                <Image
                    style={{ height: anObjectMapped.images["170x"].height, width: 150, top: 10 }}
                    source={{ uri: anObjectMapped.images["170x"].url }}
                />
                <Text style={{ padding: 10 }}>anObjectMapped.domain</Text>
            </View>
        )
    }
    _renderList2 = (anObjectMapped) => {
        return (
            <View style={{ alignItems: 'center' }}>
                <Image
                    style={{ height: anObjectMapped.images["170x"].height, width: 150, top: 10 }}
                    source={{ uri: anObjectMapped.images["170x"].url }}
                />
                <Text style={{ padding: 10 }}>anObjectMapped.domain</Text>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    scrollViewStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    view1: {
        height: 100,
        backgroundColor: 'blue'
    },
    view2: {
        height: 100,
        backgroundColor: 'red'
    },    detailsContainer: {
        flex: 2,
        flexDirection: 'row',
        padding: 8,

    },
    text1: {
        //flex: 1.2,
        textAlign: "left",
        fontSize: 14,
        fontWeight: "500"
    },
    text2: {
        //flex: 1.2,
        textAlign: "left",
        fontSize: 14,
        marginTop:5,
        color: 'gray',
        //backgroundColor : 'red',
        marginTop:10
    },

    profileImageStyle: {
        resizeMode: 'cover',
        height: 40,
        width: 40,
        borderRadius: 20
    },
    textContainer: {
        flex: 2,
        paddingLeft: 6,
        flexDirection: 'column',
    },


})
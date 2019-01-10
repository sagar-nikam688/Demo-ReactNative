
import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View, Dimensions, FlatList, Image, Modal, TextInput, ActivityIndicator
} from 'react-native';
import { Container, Header, Title, Body, Right, Icon, Button, Left } from 'native-base';
export default class SearchUsers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jsonObject: [],
            isLoading: true,
            isSearchBarActive: false,

        };
    }

    displayAlert = () => {
        console.log(this.state.isSearchBarActive)
        this.setState({
            isSearchBarActive: !this.state.isSearchBarActive,
            albums: this.state.filterAlbums
            //albums : this.state.isSearchBarActive  ? this.state.albums  : this.state.filterAlbums
        })
    };


    renderSearch = () => {
        if (this.state.isSearchBarActive) {
            return (
                <View style={{ flexDirection: 'row', }}>
                    <TextInput
                        placeholder="Search"
                        style={{ height: 30, margin: 10, borderColor: 'gray', borderRadius: 10, borderWidth: 1, flex: 2, paddingLeft: 10 }}
                        onChangeText={(text) => { this.searchInList(text) }}
                    />
                    <Icon name='close' onPress={this.displayAlert}
                        style={{ alignSelf: 'center', padding: 5 }} />
                </View>
            );
        }
    }

    onCancel = () => {
        this.props.onDialogCancel();
    };

    searchInList = (text) => {
        let urlStr = "https://api.github.com/search/users?q=" + text + "&page=1?client_id=ed4000cb58fbfd9ebd7e&client_secret=d8e477237c49da7857593e50904f0dd4f3ef0473"
        console.log(urlStr)
        return fetch(urlStr)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({
                    jsonObject: responseJson.items,
                    isLoading: false
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    _renderList = (infoObject, index) => {
        console.log(infoObject)
        return (
            <View style={styles.detailsContainer}>
                <Image
                    style={styles.profileImageStyle}
                    source={{ uri: infoObject.avatar_url }}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>{infoObject.login}</Text>
                    <Text style={styles.text1}>{infoObject.login}</Text>
                </View>
            </View>
        )
    }

    render() {
        const { visible } = this.props;
        return (
            <Modal
                visible={visible}
                animationType="slide"
                transparent
                onRequestClose={() => { }}
            >
                <Container style={styles.container}>
                    <Header>
                        <Left>
                        </Left>
                        <Body>
                            <Title >Search User</Title>
                        </Body>
                        <Right>
                            <Button transparent >
                                <Icon name='search' onPress={this.displayAlert} />
                            </Button>

                            <Button transparent >
                                <Icon  style = {{padding: 6}}name='close' onPress={this.onCancel} />
                            </Button>
                        </Right>
                    </Header>
                    {this.renderSearch()}
                    <View style={[styles.container]}>
                        <FlatList
                            data={this.state.jsonObject}
                            renderItem={(infoItem, index) => (
                                this._renderList(infoItem.item, index)
                                //<Text style= {[styles.userIDStyle,{padding: 10}]}>{albumList.item}</Text>
                            )}
                        />
                    </View>
                </Container>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'black',
    },
    detailsContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 12,
        backgroundColor: 'white'
    },
    text1: {
        flex: 1.2,
        textAlign: "left",
        fontSize: 14,
        fontWeight: "400"
    },
    text2: {
        flex: 1.2,
        textAlign: "left",
        fontSize: 14,
        color: 'gray',
    },

    profileImageStyle: {
        resizeMode: 'cover',
        height: 60,
        width: 60,
        borderRadius: 30
    },
    textContainer: {
        flex: 2,
        paddingLeft: 6,
        flexDirection: 'column',
    },
})
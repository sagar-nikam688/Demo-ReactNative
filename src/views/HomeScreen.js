import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, ActivityIndicator, FlatList, } from 'react-native';
import YoutubeListItem from '../component/YotubeListItem'
import { Container, Header, Title, Body, Right, Icon, Button, Item, Input, Left } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';

export default class Homescreen extends Component {
    static navigationOptions = {
        drawerIcon : ({tintColor}) => (
            <Icon name = "home" style ={{fontSize : 23 ,color : tintColor}}/>
        )       
    }
    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            albums: [],
            isSearchBarActive: false,
            filterAlbums: []
        }
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
                // <Header searchBar rounded>
                //     <Item>
                //         <Icon name="ios-search" />
                //         <Input placeholder="Search" />
                //     </Item>
                //     <Button transparent>
                //         <Text>Search</Text>
                //     </Button>
                // </Header>
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

    searchInList = (text) => {
        console.log(text)
        if (text != "") {
            var filtered = this.state.albums.filter(
                (album) => {
                    if (album.title.includes(text)) {
                        return album;
                    }
                },
            );
            console.log(filtered)
            this.setState({
                albums: filtered
            })
        } else {
            this.setState({
                albums: this.state.filterAlbums
            })
        }
    }

    componentDidMount() {
        console.log('callled')
        return fetch('https://s3-us-west-2.amazonaws.com/youtubeassets/home_num_likes.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    albums: responseJson,
                    filterAlbums: responseJson
                }, function () {

                });
                console.log(this.state.albums)
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
            <Container>
                <Header>
                    <Left>
                        <Button transparent >
                            <Icon name='menu' onPress={()=> this.props.navigation.openDrawer()} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>HomeScreen</Title>
                    </Body>
                    <Right>
                        <Button transparent >
                            <Icon name='search' onPress={this.displayAlert} />
                        </Button>
                    </Right>
                </Header>
                {this.renderSearch()}
                <View style={[styles.container]}>
                    <FlatList
                        data={this.state.albums}
                        renderItem={albumList => (
                            <YoutubeListItem albumList={albumList.item} />
                        )}
                        keyExtractor={item => item.number_of_views}
                    />
                </View>
            </Container>
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
    },
    SearchBarStyle: {
        padding: 10
    }
});


// export class TextLabel extends Component {
//     constructor(Props) {
//         super(Props);
//     }
//     render() {
//         let isScure = this.props.isSecure
//         return (
//             <View style={styles.textViewStyle}>
//                 <Text
//                     style={styles.Textstyle}>
//                     {this.props.textLabel}
//                 </Text>
//             </View>
//         );
//     }
// }

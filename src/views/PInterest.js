import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, ActivityIndicator, FlatList, } from 'react-native';
import { Container, Header, Title, Body, Right, Icon, Button, Item, Input, Left } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import PInterestItem from '../component/PInterestItem'


export default class PInterest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            pItems: []
        }
    }
    static navigationOptions = {
        drawerIcon : ({tintColor}) => (
            <Icon type = "Entypo" name = "pinterest" style ={{fontSize : 23 ,color : tintColor}}/>
        )       
    }
    componentDidMount() {
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
        if (this.state.isLoading) {
            return (
                <View style={styles.loadingContainer} >
                    <ActivityIndicator size='large' color='red' />
                </View>
            )
        } else {
            return (
                <Container>
                    <Header>
                        <Left>
                            <Button transparent >
                                <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
                            </Button>
                        </Left>
                        <Body>
                            <Title>PInterest</Title>
                        </Body>
                        <Right>
                            <Button transparent >
                                <Icon name='search' />
                            </Button>
                        </Right>
                    </Header>
                    <View style={[styles.container]}>
                        <FlatList
                            style = {{backgroundColor: 'gray'}}
                            data={this.state.pItems}
                            numColumns = {2}
                            renderItem={pItemList => (
                                <PInterestItem pItemList={pItemList.item} />
                            )}
                            keyExtractor={pitem => pitem.id}
                        />
                    </View>
                </Container>
            )
        }
    }
}


const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor : 'gray'
    },

})
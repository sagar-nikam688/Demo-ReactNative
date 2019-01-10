import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, FlatList, Image, StatusBar, TouchableOpacity } from 'react-native';
import { Container } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import FollowersList from './Followers'
import SearchUsers from './SearchUsers';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.params = this.props.navigation.state.params;
        this.state = {
            infoObject: this.params.jsonObject,
            showFollowerDialog: false,
            showSeachUsersDialog: false,


        };
    }

    onDialogCancel = () => {
        this.setState({ showFollowerDialog: false, showSeachUsersDialog: false});
    };

    onDialogSend = () => {
        this.setState({ showFollowerDialog: false, showSeachUsersDialog: false });
    };

    _renderList = (infoObject, index) => {
        var keyValue = ""
        var keyData = ""
        switch (infoObject.index) {
            case 1:
                keyData = "Bio"
                keyValue = this.state.infoObject.bio != null ? this.state.infoObject.bio : "No Data Available"
                break;
            case 2:
                keyData = "Email"
                keyValue = this.state.infoObject.email != null ? this.state.infoObject.email : "No Data Available"
                break;
            case 3:
                keyData = "Company"
                keyValue = this.state.infoObject.company != null ? this.state.infoObject.company : "No Data Available"
                break;
            case 4:
                keyData = "Location"
                keyValue = this.state.infoObject.location != null ? this.state.infoObject.location : "No Data Available"
                break;
            case 5:
                keyData = "Updated_at"
                keyValue = this.state.infoObject.updated_at != null ? this.state.infoObject.updated_at : "No Data Available"
                break;
        }

        return (
            <View style={styles.infoViewStyle}>
                <Text style={[styles.usernameStyle, { flex: 1 }]}>{keyData}</Text>
                <Text style={[styles.usernameStyle, { flex: 2 }]}>{keyValue}</Text>
            </View>
        )
    }

    _followerAction = () => {
        this.setState({
            showFollowerDialog: !this.state.showFollowerDialog
        })
    }

    _searchAction = () => {
        this.setState({
            showSeachUsersDialog: !this.state.showSeachUsersDialog
        })

    }


    render() {
        var list = [1, 2, 3, 4, 5, 6];
        return (
            <Container style={styles.container}>
                <View>
                    <StatusBar
                        backgroundColor="white"
                        barStyle="light-content"
                    />
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: this.state.infoObject.avatar_url }}
                    />
                    <Text style={styles.usernameStyle}>{this.state.infoObject.name}</Text>
                    <Text style={styles.userIDStyle}>{this.state.infoObject.login}</Text>
                    <View style={styles.reposInfoViewStyle}>
                        <View style={styles.reposInfoStyle}>
                            <Text style={styles.usernameStyle} >{this.state.infoObject.public_repos}</Text>
                            <Text style={styles.usernameStyle} >Repos</Text>
                        </View>
                        <View style={styles.reposInfoStyle}>
                            <Text style={styles.usernameStyle} >{this.state.infoObject.followers}</Text>
                            <Text style={styles.usernameStyle} >Followers</Text>
                        </View>
                        <View style={styles.reposInfoStyle}>
                            <Text style={styles.usernameStyle} >{this.state.infoObject.following}</Text>
                            <Text style={styles.usernameStyle} >Following</Text>
                        </View>
                    </View>

                </View>
                <View style={[styles.flatListViewStyle]}>
                    <FlatList
                        data={list}
                        renderItem={(infoItem, index) => (
                            this._renderList(infoItem, index)
                            //<Text style= {[styles.userIDStyle,{padding: 10}]}>{albumList.item}</Text>
                        )}
                    />
                </View>
                <View style={[styles.bottomButtonsStyle,]}>
                    <TouchableOpacity style={{ borderRadius: 50, backgroundColor: 'green', justifyContent: 'center', width: "100%", flex: .5, marginRight: 15 }}
                        onPress={this._followerAction}>
                        <Text style={{ textAlign: 'center', color: 'white', fontFamily: "Poppins-Light", padding: 10 }} >Followers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderRadius: 50, backgroundColor: '#173769', justifyContent: 'center', width: "100%", flex: .5, marginLeft: 15, }}
                        onPress={this._searchAction}>
                        <Text style={{ color: 'white', textAlign: 'center', fontFamily: "Poppins-Light", padding: 10 }} >Search users</Text>
                    </TouchableOpacity>
                </View>
                <FollowersList
                    visible={this.state.showFollowerDialog}
                    userId = {this.state.infoObject.login}
                    onDialogSend={this.onDialogSend}
                    onDialogCancel={this.onDialogCancel}
                />
                <SearchUsers
                    visible={this.state.showSeachUsersDialog}
                    onDialogSend={this.onDialogSend}
                    onDialogCancel={this.onDialogCancel}
                />
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    imageContainer: {
        flex: .5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        width: 80,
        height: 80,
        marginTop: 80,
        borderRadius: 40,
        backgroundColor: 'green'
    },
    usernameStyle: {
        fontSize: 18,
        paddingTop: 10,
        color: 'white'
    },
    userIDStyle: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 6
    },
    reposInfoViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    reposInfoStyle: {
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomButtonsStyle: {
        flex: .2,
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    flatListViewStyle: {
        flex: .5,
        marginTop: 20
    },
    infoViewStyle: {
        padding: 5,
        flexDirection: 'row',
    }


});

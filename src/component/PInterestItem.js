import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
export default class PInterestItem extends Component {

    componentDidMount() { }
    render() {
        let list_data = this.props.pItemList;
        debugger;
        return (
            <TouchableWithoutFeedback>
                <View style={styles.mainContainer}>
                    <View style = {{borderBottomColor : 'gray', borderBottomWidth : 1}}>
                        <Image
                            style={[styles.thumbnailStyle, {height : list_data.images["170x"].height , width : "100%" }]}
                            source={{ uri: list_data.images["170x"].url}}
                        />
                        <Text>{list_data.domain}</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Image
                            style={styles.profileImageStyle}
                            source={{ uri: list_data.images["170x"].url }}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.text1}>{list_data.domain}</Text>
                            <Text style={styles.text2}>{list_data.domain}</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: 5,
        borderRadius : 10,
        backgroundColor : 'white'

    },
    thumbnailStyle: {
        flex: 3,
        alignSelf: 'center',
        height: 200,
        width: null,
        //top:1,
        //resizeMode : "cover"
    },
    detailsContainer: {
        flex: 2,
        flexDirection: 'row',
        padding: 8,

    },
    text1: {
        flex: 1.2,
        textAlign: "left",
        fontSize: 14,
        fontWeight: "500"
    },
    text2: {
        flex: 1.2,
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
});
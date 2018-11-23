/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import TakeTextInput from '../component/TextInput'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'



type Props = {};
export default class ListWithArr extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            arr: [{a: 1},2,3,4,5,6,7,8,9,10,12,13,14,15,16,17],
        };
    }

    render() {
        const {arr} = this.state
        return (
            <ScrollView style={styles.container} >
                    {arr.map(this._renderList,key="title")}
            </ScrollView>
        );
    }
    _renderList = () => {
        return (
            <TakeTextInput title="EMAIL" placeHolder="type here..." isSecure={false} returnKeyType="next" ref="email" />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textStyle: {
        marginLeft: 40,
        //marginTop: 20,
        fontSize: 20,
        color: '#6F6B6A',
        fontFamily: "Poppins-Light",
        fontWeight: 'bold'
    },
    imageStyle: {
        width: 200,
        height: 200,
        marginTop: 20,
        flex: 2,
        //borderWidth : 1,
        marginLeft: 'auto',
        marginRight: 'auto',
        resizeMode: 'contain',
    },
    placeHolderStyle: {
        marginTop: 10,
        marginLeft: 90,
        color: '#AAB1AA',
        fontSize: 14,
        fontFamily: "Poppins-Light"
    },
    textInputContainerStyle: {
        flexDirection: 'row',
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        marginLeft: 40,
        height: 45,
    },
    imageIconStyle: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    textInputStyle: {
        marginLeft: 5,
        height: 40,
        alignSelf: 'stretch',
        flex: 1,
        paddingLeft: 5
    },
    buttonStyle: {
        marginTop: 20,
        backgroundColor: 'green',
        borderRadius: 20,
        marginLeft: 40,
        marginRight: 40,
        justifyContent: 'center',
        alignItems: 'center',
        // textAlign: 'center',
        height: 40,
    },
    textStyle2: {
        fontSize: 17,
        color: 'white',
        backgroundColor: 'green',
        fontFamily: "Poppins-Thin",
        fontWeight: 'bold'
    },
    socialContainerStyle: {
        flex: 1,
        marginLeft: 40,
        marginRight: 40,
        flexDirection: 'row',
        marginTop: 20,
        // height : 45,
        backgroundColor: 'red',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    forgotPasswordStyle: {
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 16,
    }
});
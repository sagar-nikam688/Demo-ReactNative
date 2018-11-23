import React, { Component } from 'react';
import { Platform, StyleSheet, View, ScrollView, Text, Image } from 'react-native';

export default class SignUp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoViewStyle}>
                    <Image style={styles.logoStyle} source={require('../Screen.png')}
                    />
                    <Text style={{ alignSelf: "flex-start", fontSize: 20, fontWeight: 'bold', paddingLeft: 15 }}>Registration</Text>
                </View>
                <View style={styles.loginFormStyle}>
                </View>
                <View style={styles.forgotPwdStyle} >
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue'
    },
    logoViewStyle: {
        flex: .4,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },
    logoStyle: {
        resizeMode: 'center'
    },
    loginFormStyle:{
        flex:.5,
        flexDirection:'column',
        borderWidth:1,
        backgroundColor:'steelblue'
    },
    forgotPwdStyle: {
        flex:.1,
        borderWidth:1,
        backgroundColor:'red'
    }
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import TakeTextInput from './src/component/TextInput'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'



type Props = {};
export default class SignUp extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            emailText: "",
            pwdText: "",
            email: "",
            pwd: "",
        };
    }

    render() {
        return (
            <KeyboardAwareScrollView style={styles.container} behavior="padding" enabled >
                <View style={{ flex: .3, backgroundColor: 'red' }}>
                    <Image
                        style={styles.imageStyle}
                        source={require('./src/Screen.png')}
                    />
                </View>
                <View style={{ flex: .6, backgroundColor: 'gray' }}>
                    <Text style={styles.textStyle}>Sign in</Text>
                    {/* <TakeTextInput title="EMAIL" placeHolder="type here..." isSecure={false} returnKeyType="next" ref="email" onFocusblur={() => { this.secondTextInput.focus() }}/> */}

                    <Text style={styles.placeHolderStyle}>EMAIL</Text>
                    <View style={styles.textInputContainerStyle}>
                        <Image
                            style={styles.imageIconStyle}
                            source={require('./src/at.png')}
                        />
                        <TextInput
                            ref="email"
                            style={styles.textInputStyle}
                            placeholder="abc@example.com"
                            returnKeyType="next"
                            onChangeText={(emailText) => this.setState({ emailText: true, email: emailText })}

                            onSubmitEditing={() => { this.secondTextInput.focus() }}
                        />
                    </View>
                    {/* <TakeTextInput title="PASSWORD" placeHolder="type here..." isSecure={true} returnKeyType="done" ref={(input) => { this.secondTextInput = input; }}/> */}

                    <Text style={styles.placeHolderStyle}>PASSWORD</Text>
                    <View style={styles.textInputContainerStyle}>
                        <Image
                            style={styles.imageIconStyle}
                            source={require('./src/lock.png')}
                        />
                        <TextInput
                            ref={(input) => { this.secondTextInput = input; }}
                            secureTextEntry={true}
                            style={styles.textInputStyle}
                            placeholder="*********"
                            returnKeyType="done"
                            onChangeText={(pwdText) => this.setState({ pwdText: true, pwd: pwdText })}
                        />
                    </View>
                    <TouchableOpacity style={styles.buttonStyle} onPress={this._validateSignIn} disabled={(this.state.emailText && this.state.pwdText ? false : true)}>
                        <Text style={styles.textStyle2}>Sign in</Text>
                    </TouchableOpacity>
                    <View style={[styles.socialContainerStyle,]}>
                        <TouchableOpacity style={{ borderRadius: 20, height: 40, backgroundColor: '#f4492f', justifyContent: 'center', width: "100%", flex: .5, marginRight: 15 }}>
                            <Text style={{ textAlign: 'center', color: 'white', fontFamily: "Poppins-Light" }} onPress={this._gmailCall}>Gmail</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderRadius: 20, height: 40, backgroundColor: '#173769', justifyContent: 'center', width: "100%", flex: .5, marginLeft: 15 }}>
                            <Text style={{ color: 'white', textAlign: 'center', fontFamily: "Poppins-Light" }} >Facebook</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {{flex: .6, justifyContent: 'flex-end',flexDirection:'column',backgroundColor : 'red'}}>
                <TouchableOpacity style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center', height: 22, }}>
                    <Text style={{ fontSize: 17, color: '#D6772C', fontWeight: 'bold', fontFamily: "Poppins-Light" }}>Forgot Password?</Text>
                </TouchableOpacity>
                    <View style={[styles.forgotPasswordStyle,]}>
                        <Text style={{ fontSize: 17, color: 'darkgray', alignItems: 'center', fontFamily: "Poppins-Light", }}>Don't have account? </Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 17, color: 'darkgray', }}>Sign up now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        );
    }
    _gmailCall = () => {
        alert('Login Gmail!')
    }
    _validateSignIn = () => {
        let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var regPwd = /^[a-zA-Z]$/;

        console.log(this.state.email)
        if (regEmail.test(this.state.email) === false) {
            alert('Email incorrect')
        } else if (regPwd.test(this.state.pwd) === false && this.state.pwd.length <= 8  ) {
            alert("password should contain atleast one number and one special character and password should have minimum 8 characters"); 
        } else {
            alert('Login Sucessfull!')
        }
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
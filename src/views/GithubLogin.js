import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import { Container } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
export default class GithubLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailText: "sagar-nikam688",
            pwdText: "",
            isLoading:false,
            responseObject: {}
        };
    }

    _validateSignIn= () => {
        if (this.state.emailText != "") {
            let urlStr = "https://api.github.com/users/" + this.state.emailText + "?client_id=ed4000cb58fbfd9ebd7e&client_secret=d8e477237c49da7857593e50904f0dd4f3ef0473" 
            debugger;
            console.log(urlStr)
            return fetch(urlStr)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson)
                    const { navigate } = this.props.navigation;
                    navigate('Dashboard', {
                        jsonObject: responseJson,
                      });
                })
                .catch((error) => {
                    console.error(error);
                });   
        } else {
            alert('Please Enter valid Email')
        }
    }



    render() {
        const { width, height } = Dimensions.get('window');
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{ height: height }}
                style={{ flex: 1 }}
                behavior="padding" enabled >
                <Container style={styles.container}>
                    <View style={styles.loginContainer}>
                        <Text style={styles.title}>GitHub!</Text>
                        <Text style={styles.placeHolderStyle}>Username or email</Text>
                        <TextInput
                            ref="email"
                            style={styles.textInputStyle}
                            placeholder="abc@example.com"
                            returnKeyType="next"
                            onChangeText={(emailText) => this.setState({ emailText: emailText })}
                            value = "sagar-nikam688"
                            onSubmitEditing={() => { this.secondTextInput.focus() }}
                        />
                        <Text style={styles.placeHolderStyle}>Password</Text>
                        <TextInput
                            ref={(input) => { this.secondTextInput = input; }}
                            secureTextEntry={true}
                            style={styles.textInputStyle}
                            placeholder="*********"
                            returnKeyType="done"
                            onChangeText={(pwdText) => this.setState({ pwdText: pwdText })}
                        />
                        <TouchableOpacity style={styles.buttonStyle} onPress={this._validateSignIn}>
                            <Text style={[styles.textStyle2, { padding: 10 }]}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <ActivityIndicator animating={this.state.isLoading} size="large" color="white" />
                    </View>

                </Container>
            </KeyboardAwareScrollView>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
        margin: 10,
        color: 'black',
    },
    loginContainer: {
        height: 380,
        width: 320,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 10,
    },
    placeHolderStyle: {
        marginTop: 10,
        marginLeft: 10,
        color: 'black',
        fontSize: 14,
    },
    textInputStyle: {
        marginTop: 2,
        height: 40,
        alignSelf: 'stretch',
        paddingLeft: 5,
        marginLeft: 10,
        marginRight: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    buttonStyle: {
        marginTop: 20,
        backgroundColor: 'green',
        borderRadius: 50,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle2: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold'
    },
    spinnerViewStyle: {
        position: 'absolute',
        top:"50%",
        backgroundColor:'yellow'
    }

});



 

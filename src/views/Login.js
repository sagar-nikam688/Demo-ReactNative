/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions, AlertIOS } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

export default class Login extends React.Component {
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
    const {navigate} = this.props.navigation;
    const { width, height } = Dimensions.get('window');
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{ height: height }}
        style={[styles.container]}
        behavior="padding" enabled >
        <View style={{ flex: .6, }}>
          {this._renderImage()}
          <Text style={styles.textStyle}>Sign in</Text>
        </View>
        {this._renderLoginForm()}
        <View style={{ flex: .2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 60 }}>
          <View style={[styles.socialContainerStyle,]}>
            <TouchableOpacity style={{ borderRadius: 50, backgroundColor: '#f4492f', justifyContent: 'center', width: "100%", flex: .5, marginRight: 15 }}
              onPress={this._gmailCall}>
              <Text style={{ textAlign: 'center', color: 'white', fontFamily: "Poppins-Light", padding: 10 }} >Gmail</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderRadius: 50, backgroundColor: '#173769', justifyContent: 'center', width: "100%", flex: .5, marginLeft: 15, }}
              onPress={this._facebookCall}>
              <Text style={{ color: 'white', textAlign: 'center', fontFamily: "Poppins-Light", padding: 10 }} >Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: .5, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
          <TouchableOpacity style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center', height: 22, }}>
            <Text style={{ fontSize: 17, color: '#D6772C', fontWeight: 'bold', fontFamily: "Poppins-Light" }}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={[styles.forgotPasswordStyle,]}>
            <Text style={{ fontSize: 17, color: 'darkgray', alignItems: 'center', fontFamily: "Poppins-Light", }}>Don't have account? </Text>
            <TouchableOpacity
              onPress={() => navigate('HomeScreen')}>
              <Text style={{ fontSize: 17, color: 'darkgray', }} >Sign up now</Text>
            </TouchableOpacity>
          </View>
        </View>

      </KeyboardAwareScrollView>
    );
  }
  _renderImage() {
    return (
      <Image
        style={styles.imageStyle}
        source={require('../Screen.png')}
      />
    )
  }

  _renderLoginForm() {
    return (
      <View style={{ flex: .4, }}>
        <Text style={styles.placeHolderStyle}>EMAIL</Text>
        <View style={styles.textInputContainerStyle}>
          <Image
            style={styles.imageIconStyle}
            source={require('../at.png')}
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
            source={require('../lock.png')}
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
          <Text style={[styles.textStyle2, { padding: 10 }]}>Sign in</Text>
        </TouchableOpacity>
      </View>
    )
  }
  _gmailCall = () => {
    AlertIOS.alert(
      'Sync Complete',
      'All your data are belong to us.'
    );
  }
  _facebookCall = () => {
    AlertIOS.prompt(
      'Enter a UserId',
      null,
      text => alert('You entered ' + text)
    );
  }
  _validateSignIn = () => {
    let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let regPwd = /^[a-zA-Z]$/;
    if (regEmail.test(this.state.email) === false) {
      alert('Please Enter valid Email')
    } else if (regPwd.test(this.state.pwd) === false || this.state.pwd.length <= 8) {
      alert("Password should contain atleast one number , one special character also it should have minimum 8 characters");
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
    marginTop: 20,
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
    fontFamily: "Poppins-Thin",
    fontWeight: 'bold'
  },
  socialContainerStyle: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgotPasswordStyle: {
    paddingTop: 15,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 16,
  }
});

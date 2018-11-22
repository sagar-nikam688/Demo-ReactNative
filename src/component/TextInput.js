import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default class TakeTextInput extends Component{
  constructor(Props) {
    super(Props);
  }
  render() {
    let isScure = this.props.isSecure
    return (
      <View>
        <Text style={styles.placeHolderStyle}>{this.props.title}</Text>
        <View style={styles.textInputContainerStyle}>
          <Image
            style={styles.imageIconStyle}
            source = {isScure ? require('../lock.png') : require('../at.png')}
          />
          <TextInput
            secureTextEntry = {this.props.isSecure}    
            returnKeyType = {this.props.returnKeyType}
            style={styles.textInputStyle}
            placeholder=  {this.props.placeHolder}
            onChangeText={(text) => this.setState({ text })}
            onSubmitEditing = { () => {this.props.onFocusblur()}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputContainerStyle: {
    flexDirection: 'row',
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    marginLeft: 40,
    height: 45,
  },
  placeHolderStyle: {
    marginTop: 10,
    marginLeft: 90,
    color: '#AAB1AA',
    fontSize: 14,
    fontFamily : "Poppins-Light"
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
});
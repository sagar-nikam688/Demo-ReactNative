/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {  StyleSheet } from 'react-native';
import Login from './src/views/Login.js'
import ListWithArr from './src/views/ListWithArr'
import SignUp from './src/views/SignUp'
import Navigation from './src/actions/Navigation'

export default class App extends Component {
  render() {
    return (
      <Navigation/>
    );s
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
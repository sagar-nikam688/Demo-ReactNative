import React, { Component } from 'react';
import { Platform, StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from '../views/Login'
import SignUp from '../views/SignUp'
const Navigation = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    SignUp: { screen: SignUp },
});

const AppContainer = createAppContainer(Navigation);


export default AppContainer;

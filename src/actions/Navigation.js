import React, { Component } from 'react';
import { Platform, StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../views/HomeScreen'
import Login from '../views/Login'
import SignUp from '../views/SignUp'
import DrawerReact from './Drawer'
const Navigation = createStackNavigator({
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    DrawerReact: { screen: DrawerReact },
    HomeScreen: { screen: HomeScreen }
}, {
        headerMode: "none",
    });
const AppContainer = createAppContainer(Navigation);
export default AppContainer;

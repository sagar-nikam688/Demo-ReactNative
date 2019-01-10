import React, { Component } from 'react';
import {View, ScrollView, Text, Image,Platform, StyleSheet,  SafeAreaView } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';
import HomeScreen from '../views/HomeScreen'
import Login from '../views/Login'
import SignUp from '../views/SignUp'
import Dashboard from '../views/Dashboard';
import PInterest from '../views/PInterest'
import PInterestScroll from '../views/PInterestScroll'
import BumpCard from '../views/parentCompenent'
import ChartViewDemo from '../views/ChartView'
import BarChart from '../component/BarChart'
import GithubLogin from '../views/GithubLogin'


const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{
      height: 150,
      backgroundColor: 'white',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Image source={require('../Screen.png')}
        style={{ height: 100, width: 150 }} />
    </View>
    <ScrollView style={{ backgroundColor: 'skyblue' }}>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const AppDrawer = createDrawerNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  PInterest: {
    screen: PInterest
  },
  PInterestScroll: {
    screen: PInterestScroll
  },
  BumpCard: {
    screen: BumpCard
  },
  BarChart: {
    screen: BarChart
  },
  GithubLogin: {
    screen: GithubLogin
  },
},{
      contentComponent: CustomDrawerComponent,
      contentOptions : {
          activeTintColor: 'white',
      }
  },{
      mode: "none",
      headerMode: 'none',
      navigationOptions: {
        gesturesEnabled: false
      }
    })
  

const Navigation = createStackNavigator({
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  AppDrawer: { screen: AppDrawer },
  HomeScreen: { screen: HomeScreen },
  GithubLogin: { screen: GithubLogin },
  Dashboard: { screen: Dashboard }

}, {
    defaultNavigationOptions: ({ navigation }) => {
    },
    mode: "none",
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
    }
  });

const AppContainer = createAppContainer(Navigation);
export default AppContainer;

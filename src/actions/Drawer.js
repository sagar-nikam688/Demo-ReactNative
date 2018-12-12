import React, { Component } from 'react';
import { Platform, StyleSheet, View, ScrollView, Text, Image, SafeAreaView } from 'react-native';
import { createDrawerNavigator, createAppContainer ,DrawerItems} from 'react-navigation';
import HomeScreen from '../views/HomeScreen'
import PInterest from '../views/PInterest'
import PInterestScroll from '../views/PInterestScroll'
import BumpCard from '../views/parentCompenent'
import ChartViewDemo from '../views/ChartView'
import BarChart from '../component/BarChart'

export default class DrawerReact extends React.Component {
    render() {
        return (
            <AppContainer />
        )
    }
}

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1}}>
        <View style={{
            height: 150,
            backgroundColor: 'white',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Image source={require('../Screen.png')}
                style={{ height: 100, width: 150}} />
        </View>
        <ScrollView style = {{backgroundColor : 'skyblue'}}>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
)

const AppDrawer = createDrawerNavigator({
    HomeScreen: HomeScreen,
    PInterest : PInterest,
    PInterestScroll : PInterestScroll,
    BumpCard : BumpCard,
    ChartViewDemo : ChartViewDemo,
    BarChart : BarChart
},{
    contentComponent: CustomDrawerComponent,
    contentOptions : {
        activeTintColor: 'white',
    }
})

const AppContainer = createAppContainer(AppDrawer);


import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, ActivityIndicator, FlatList, Dimensions} from 'react-native';
import { Container, Header, Title, Body, Right, Icon, Button, Item, Input, Left } from 'native-base';

import { BarChart, } from 'react-native-chart-kit'

export default class ChartViewDemo extends Component {
    constructor(props) {
        super(props);

    }
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon type="Entypo" name="bar-graph" style={{ fontSize: 23, color: tintColor }} />
        )
    }

    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                data: [20, 45, 28, 80, 99, 43]
            }]
        }
        return (
            <View style = {{justifyContent : 'center', alignItems : 'center', flex:1}}>
                <BarChart
                    //style={graphStyle}
                    data={data}
                    width={Dimensions.get('window').width}
                    height={220}
                    chartConfig={{
                        backgroundColor: 'white',
                        backgroundGradientFrom: 'white',
                        backgroundGradientTo: 'black',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
                    }}

                />
            </View>
        )
    }
}
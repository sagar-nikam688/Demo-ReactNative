import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, ActivityIndicator, FlatList, TextInput} from 'react-native';
import { Container } from 'native-base';
export default class BumpCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            print: ""
        }
    }
    getIndex = (val) => {
        this.setState({print:val})
    }    
    render() {
        return (
            <Container style = {{justifyContent : 'flex-start' , alignItems : 'center'}}> 
                        <Text style = {{color : 'skyblue', fontSize : 16,paddingTop : 54}}>child_To_Parent_Data_Passing</Text>
                        <FeedCardImage setChangedtext={this.getIndex} />
                        <Text style = {{color : 'skyblue', fontSize : 16, padding : 20,}}>{this.state.print}</Text>
            </Container>
        )
    }
}

class FeedCardImage extends Component {
    constructor(props) {
        super(props);
    }
    onChangeText(text) {
        this.props.setChangedtext(text)
    }
    render() {
        return (<TextInput style = {{height : 30, borderColor : 'red', width : 180, borderWidth :1,backgroundColor: 'whitesmoke',top: 20}} onChangeText={(text) => this.onChangeText(text)}
        />)
    }

}


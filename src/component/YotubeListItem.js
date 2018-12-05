import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
export default class YoutubeListItem extends Component {

    componentDidMount() { }
    render() {
        let list_data = this.props.albumList;
        return (
            <TouchableWithoutFeedback>
                <View style={styles.mainContainer}>
                    <View>
                        <Image
                            style={styles.thumbnailStyle}
                            source={{ uri: list_data.thumbnail_image_name }}
                        />
                        <Text style={{ color: 'white', alignSelf: 'flex-end', position: 'absolute', top: 180, right: 10 }}>{(list_data.duration / 60).toFixed(2)}</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Image
                            style={styles.profileImageStyle}
                            source={{ uri: list_data.channel.profile_image_name }}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.text1}>{list_data.title}</Text>
                            <Text style={styles.text2}>{list_data.channel.name + "・" + list_data.number_of_views % 1000 + "K Views"}</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 5,
    },
    thumbnailStyle: {
        flex: 3,
        resizeMode: 'cover',
        height: 200,
        width: null,
    },
    detailsContainer: {
        flex: 2,
        flexDirection: 'row',
        padding: 8,

    },
    text1: {
        flex: 1.2,
        textAlign: "left",
        fontSize: 14,
        fontWeight: "400"
    },
    text2: {
        flex: 1.2,
        textAlign: "left",
        fontSize: 14,
        color: 'gray',
    },

    profileImageStyle: {
        resizeMode: 'cover',
        height: 40,
        width: 40,
        borderRadius: 20
    },
    textContainer: {
        flex: 2,
        paddingLeft: 6,
        flexDirection: 'column',
    },
});
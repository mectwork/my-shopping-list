import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class ProductDetail extends Component {
    render() {
        return (
            <View>
                <Text style={styles.topText}>This is product: {this.props.navigation.state.params.item}</Text>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    topText:{
        fontSize:20,
    }
})


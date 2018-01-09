import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Container, Content, Button, Icon, Footer, FooterTab} from 'native-base';
import Resolution from '@cubalider/resolution';

class HomeScreen extends Component {
    static navigationOptions = {
        title: "My Shopping",
    };

    constructor() {
        super();

        this.state = {
            listOnCreation: [],
            defaultList: [],
        }
    }

    render() {

        return (
            <Container style={styles.container}>
                <Content scrollEnabled={false}>
                    <View style={styles.imageSection}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/icon.png')}
                        />
                        <View style={styles.titleView}>
                            <Text style={styles.title}>MY SHOPPING LIST</Text>
                        </View>
                    </View>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button info full
                                onPress={() => this.props.navigation.navigate('NewList', {
                                    'defaultList': this.list(),
                                })}>
                            <Text style={styles.newListButton}>Create new List</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>

        );

    }


    list = () => {
        if (this.state.defaultList.length === 0) {
            this.state.defaultList =
                [
                    {product: "Product 1"},
                    {product: "Product 2"},
                    {product: "Product 3"},
                    {product: "Product 4"},
                    {product: "Product 5"},
                    {product: "Product 6"},
                    {product: "Product 7"},
                    {product: "Product 8"},
                    {product: "Product 9"},
                ];
        }

        return this.state.defaultList;
    };

}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titleView: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    imageSection: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        margin: 40,
    },
    newListButton: {
        color: 'white',
        fontSize: 20,
    }

});

export default HomeScreen;
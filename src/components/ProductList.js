import React, {Component} from "react";
import {Text, View, TouchableOpacity, Alert, ScrollView, StyleSheet} from "react-native";

import {
    Body,
    Button,
    Container,
    Content,
    Footer,
    FooterTab,
    Input,
    List,
    ListItem,
    Item,
    Right,
} from "native-base";

class ProductList extends Component {
    static navigationOptions = {
        title: "New Shopping List",
    };

    constructor() {
        super();
        this.state = {
            product_input: '',
            productList: [],
        };
    }

    render() {
        return (
            <Container style={styles.container}>

                <View style={styles.inputSection}>
                    <Item rounded>
                        <Input placeholder={"Add Product"}
                               maxLength={40}
                               placeholderTextColor="#aaa"
                               value={this.state.product_input}
                               onChangeText={this.handleTextChange}
                               onFocus={() => {
                                   this.setState({product_input: ''})
                               }}
                               returnKeyType="done"
                               onSubmitEditing={this.handleSubmit}
                               style={{color: "#fff"}}/>
                    </Item>
                </View>

                <Content>

                    <ScrollView style={styles.listView}>
                        <List dataArray={this.state.productList}
                              renderRow={(item) =>
                                  <ListItem icon>

                                      <Body>
                                      <Text
                                          style={styles.productListItem}
                                          onPress={() => this.props.navigation.navigate('ProductDetail', {'item': item.product})}>
                                          {item.product}
                                      </Text>
                                      </Body>

                                      <Right>
                                          <TouchableOpacity onPress={() => this.removeProduct(item.product)}>
                                              <Text style={styles.deleteText}> Remove</Text>
                                          </TouchableOpacity>
                                      </Right>

                                  </ListItem>
                              }>
                        </List>
                    </ScrollView>

                </Content>

                <Footer>
                    <FooterTab>
                        <Button onPress={() => this.loadDefaultListAlert()}>
                            <Text>Load My List</Text>
                        </Button>
                        <Button info onPress={() => this.saveListAlert()}>
                            <Text style={styles.saveListButton}>Save List</Text>
                        </Button>
                    </FooterTab>
                </Footer>

            </Container>
        );
    }

    handleSubmit = () => {
        if (this.state.product_input) {
            this.setState({
                productList: this.state.productList.concat({product: this.state.product_input}),
                product_input: '',
            });
        }
    };

    handleTextChange = product_input => {
        this.setState({product_input});
    };

    removeProduct(product) {

        Alert.alert(
            'Deleting ' + product,
            'Are you sure you want to delete this product?',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => this.removeProductConfirmed(product)},
            ],
            {cancelable: false}
        )
    }

    removeProductConfirmed(product) {
        let productList = this.state.productList.slice();
        let index = productList.findIndex(p => p.product === product);
        productList.splice(index, 1);
        this.setState({
            productList: productList,
        });
    }

    loadDefaultListAlert() {
        if (this.state.productList.length > 0) {
            Alert.alert(
                'Loading List ',
                'You have items already created. Do you want to replace these with your default list?',
                [
                    {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'Yes', onPress: () => this.loadDefaultList()},
                ],
                {cancelable: false}
            )
        } else {
            this.loadDefaultList();
        }
    }

    loadDefaultList() {
        this.setState({productList: this.props.navigation.state.params.defaultList})
    }

    saveListAlert() {
        if (this.state.productList.length > 0) {
            this.saveList();
        } else {
            Alert.alert(
                'No products',
                'You don\'t have products on your list. Please add some products first.',
                [
                    {text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'ok'},
                ],
                {cancelable: false}
            )
        }
    }

    saveList() {
        Alert.alert("Sorry", "This functionality has not being implemented yet.")
    }

}
//StyleSheet
let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    inputSection: {
        padding: 30,
        backgroundColor: "#2d2d2d"
    },
    listView: {
        marginTop: 10,
    },
    productListItem: {
        flex: 1,
        fontSize: 17,
        paddingTop: 10,
        paddingBottom: 5
    },
    deleteText: {
        color: 'red',
    },
    saveListButton: {
        color: 'white',
        fontSize: 20,
    },
});

export default ProductList;
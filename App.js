import React, {Component} from "react";
import {ScrollView, Text, View, TouchableOpacity, Alert, ActivityIndicator} from "react-native";

import {
    Body,
    Button,
    Container,
    Content,
    Footer,
    FooterTab,
    Form,
    Icon,
    Input,
    Item,
    Label,
    Left,
    List,
    ListItem,
    Picker,
    Right,
    SwipeRow,
    Title
} from "native-base";
import Header from "./components/Header";


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            product_input: '',
            productList: [],
            showToast: false
        };
    }

    _handleButtonPress = () => {
        if (this.state.product_input) {
            this.setState({
                productList: this.state.productList.concat({product: this.state.product_input}),
                product_input: '',
            });
        }
    };

    _handleTextChange = product_input => {
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

        let productList = this.state.productList;
        productList.splice(product, 1);
        this.setState({
            productList: productList,
        });
    }

    editProduct(product) {

    }


    render() {
        return (
            <Container>

                <Header/>

                <View style={{padding: 30, backgroundColor: "#000"}}>
                    <Item rounded>

                        <Input placeholder={"Add Product"}

                               value={this.state.product_input}
                               onChangeText={this._handleTextChange}
                               onFocus={() => {
                                   this.setState({product_input: ''})
                               }}
                               returnKeyType="done"
                               onSubmitEditing={this._handleButtonPress}
                               style={{color: "#fff"}}/>
                    </Item>
                </View>

                <Content style={{marginTop: 20}}>

                    <ScrollView style={{marginTop: 20}}>
                        <List dataArray={this.state.productList}
                              renderRow={(item) =>
                                  <ListItem icon>

                                      <Body>
                                      <Text style={{fontSize: 15, paddingTop: 5, paddingBottom: 5}}
                                            onLongPress={() => this.editProduct(item.product)}>{item.product}</Text>
                                      </Body>

                                      <Right>

                                          <TouchableOpacity onPress={() => this.removeProduct(item.product)}>
                                              <Text style={{color: 'red'}}> Remove</Text>
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
                        <Button success onPress={() => this.saveListAlert()}>
                            <Text style={{color: 'white', fontSize: 20}}>Save List</Text>
                        </Button>
                    </FooterTab>
                </Footer>

            </Container>
        );
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
        let list = [
            {product: "product 1"},
            {product: "product 2"},
            {product: "product 3"},
            {product: "product 4"},
            {product: "product 5"},
        ];

        this.setState({
            productList: list,
        })
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
        // TODO
    }

}


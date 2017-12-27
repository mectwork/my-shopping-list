import React, {Component} from 'react';
import {Container, Header, Left, Body, Right, Button, Icon, Title} from 'native-base';

export default class HeaderApp extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu'/>
                    </Button>
                </Left>
                <Body>
                <Title>My Shopping</Title>
                </Body>
                <Right/>
            </Header>

        );
    }
}
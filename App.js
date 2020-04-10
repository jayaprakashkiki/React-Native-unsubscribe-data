import React, { Component } from 'react';
import { Image, AsyncStorage, View, Text } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Form, Item, Button, Icon, Left, Body, Right, Input, Label, List, ListItem } from 'native-base';
import Profile from './profile';


export default class ListPage extends Component {

    constructor(props) {
        super(props);
        this.mounted = false;
        this.state = {
            book: null,
            show: false
        }
        console.log('this is props ' + props);
        console.log('constructor called');

    }

    componentDidMount() {
        this.mounted = true;
        this.getapi();
        console.log("componentdidmount called");

    }

    componentWillUnmount() {
        console.log('unmount');
        this.mounted = false
    }

    async getapi() {
        console.log('called');
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const fetchdata = await fetch(url);
        const response = await fetchdata.json();
        console.log(response);
        if (this.mounted) {
            // dataSource.push(response);
            this.setState({
                book: response
            })
        }
    }
    Move() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        console.log('render called');
        return (
            <Container>
                <Content>
                    <Button block onPress={() => this.props.navigation.navigate('profile')}>
                        <Text style={{ color: 'white' }}>Move</Text>
                    </Button>
                    {
                        this.state.book && this.state.book.map((item, index) => {
                            return (
                                <View key={index}>
                                    <List>
                                        <ListItem>
                                            <Text>{item.title}</Text>
                                        </ListItem>
                                    </List>
                                </View>

                            )
                        })
                    }


                </Content>
            </Container>
        );
    }
}

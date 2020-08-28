import React, { Component } from 'react';
import { ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { defaultImage } from '../config/rest_config';

export default class DataItem extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }

    render() {
        return (
            <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={{ uri: this.data.urlToImage != null ? this.data.urlToImage : defaultImage }} />
                </Left>
                <Body>
                    <Text numberOfLines={2}>{this.data.title}</Text>
                    <Text note numberOfLines={2}>{this.data.description}</Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>
        )
    }
};
import React, { Component } from 'react';
import { ListItem, Thumbnail, Text, Left, Body, Right, Button, View } from 'native-base';
import { defaultImage } from '../config/rest_config';
import Time from './time';

export default class DataItem extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }

    handlePress = () => {
        const { title, url } = this.data;
        this.props.onPress({ title, url });
    }

    render() {
        return (
            <ListItem thumbnail key={this.data.title}>
                <Left>
                    <Thumbnail square source={{ uri: this.data.urlToImage != null ? this.data.urlToImage : defaultImage }} />
                </Left>
                <Body>
                    <Text numberOfLines={2}>{this.data.title}</Text>
                    <Text note numberOfLines={2}>{this.data.description}</Text>
                    <View style={{ flex: 1, flexDirection: 'row'}}>
                        <Text note>{this.data.source.name}</Text>
                        <Time time={this.data.publishedAt} />
                    </View>
                </Body>
                <Right>
                    <Button transparent onPress={this.handlePress}>
                        <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>
        )
    }
};
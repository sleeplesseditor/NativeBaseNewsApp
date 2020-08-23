import React, { Component } from 'react';
import { Container, Header, Left, Content, Right, Tab, Tabs, Title } from 'native-base';
import TabOne from './tabs/tab1';
import TabTwo from './tabs/tab2';
import TabThree from './tabs/tab3';

export default class TabsExample extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs style={{backgroundColor: '#009387'}} />
                <Left />
                <Body>
                    <Title style={{color: 'white'}}>Native Base News App</Title>
                </Body>
                <Right />
                <Tabs tabBarUnderlineStyle={{ backgroundColor: 'white' }}>
                    <Tab tabStyle={{backgroundColor: '#009387'}} activeTabStyle={{ backgroundColor: '#009387'}} textStyle={{ color: 'white '}} activeTextStyle={{ color: 'white'}} heading="Tab1">
                        <TabOne />
                    </Tab>
                    <Tab tabStyle={{backgroundColor: '#009387'}} activeTabStyle={{ backgroundColor: '#009387'}} textStyle={{ color: 'white '}} activeTextStyle={{ color: 'white'}} heading="Tab2">
                        <TabTwo />
                    </Tab>
                    <Tab tabStyle={{backgroundColor: '#009387'}} activeTabStyle={{ backgroundColor: '#009387'}} textStyle={{ color: 'white '}} activeTextStyle={{ color: 'white'}} heading="Tab3">
                        <TabThree />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
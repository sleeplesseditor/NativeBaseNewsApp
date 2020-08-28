import React, { Component } from 'react';
import { Body, Container, Header, Content, Tab, Tabs, Text, Title } from 'native-base';
import TabOne from './tabs/tab1';
import TabTwo from './tabs/tab2';
import TabThree from './tabs/tab3';

export default class TabsExample extends Component {
    render() {
        return (
            <Container>
                <>
                <Header hasTabs style={{backgroundColor: '#009387'}}>
                    <Body>
                        <Title style={{color: '#fff'}}>Native Base News App</Title>
                    </Body>
                </Header>
                <Tabs tabBarUnderlineStyle={{ backgroundColor: '#fff' }}>
                    <Tab tabStyle={{backgroundColor: '#009387'}} activeTabStyle={{ backgroundColor: '#009387'}} textStyle={{ color: '#fff '}} activeTextStyle={{ color: '#fff'}} heading="Tab1">
                        <TabOne />
                    </Tab>
                    <Tab tabStyle={{backgroundColor: '#009387'}} activeTabStyle={{ backgroundColor: '#009387'}} textStyle={{ color: '#fff '}} activeTextStyle={{ color: '#fff'}} heading="Tab2">
                        <TabTwo />
                    </Tab>
                    <Tab tabStyle={{backgroundColor: '#009387'}} activeTabStyle={{ backgroundColor: '#009387'}} textStyle={{ color: '#fff '}} activeTextStyle={{ color: '#fff'}} heading="Tab3">
                        <TabThree />
                    </Tab>
                </Tabs>
                </>
            </Container>
        );
    }
}
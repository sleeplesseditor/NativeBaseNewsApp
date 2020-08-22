import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import TabOne from './tabs/tab1';
import TabTwo from './tabs/tab2';
import TabThree from './tabs/tab3';

export default class TabsExample extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs />
                <Tabs>
                    <Tab heading="Tab1">
                        <TabOne />
                    </Tab>
                    <Tab heading="Tab2">
                        <TabTwo />
                    </Tab>
                    <Tab heading="Tab3">
                        <TabThree />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
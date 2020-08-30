import React, { Component } from 'react';
import { Dimensions, Modal, Share } from 'react-native';
import { WebView } from 'react-native-webview';
import { Body, Button, Container, Content, Header, Icon, Left, Right, Title } from 'native-base';

const webViewHeight = Dimensions.get('window').height - 56;

export default class ArticleModal extends Component {
    constructor(props) {
        super(props);
    }

    handleClose = () => {
        this.props.onClose();
    }

    handleShare = () => {
        const { url, title } = this.props.articleData;
        message = `${title}\n\nRead More @${url}\n\nShared via Native Base News App`;
        return Share.share(
            {title, message, url: message },
            {dialogTitle: `Share ${title}`}
        );
    }

    render() {
        const { showModal, articleData } = this.props;
        const { title, url } = articleData;
        if (url != undefined) {
            return (
                <Modal
                    animationType="slide"
                    transparent
                    visible={showModal}
                    onRequestClose={this.handleClose}
                >
                    <Container style={{ margin: 15, marginBottom: 0, backgroundColor: '#fff' }}>
                        <Header style={{ backgroundColor: '#009387' }}>
                            <Left>
                                <Button onPress={this.handleClose} transparent>
                                    <Icon name="close" style={{ color: '#fff', fontSize: 24 }} />
                                </Button>
                            </Left>
                            <Body>
                                <Title children={title} style={{ color: '#fff' }} />
                            </Body>
                            <Right>
                                <Button onPress={this.handleShare} transparent>
                                    <Icon name="share" style={{ color: '#fff', fontSize: 24 }} />
                                </Button>
                            </Right>
                        </Header>
                        <Content contentContainerStyle={{ height: webViewHeight }}>
                            <WebView
                                onError={this.handleClose}
                                scalesPageToFit
                                source={{ uri: url }}
                                startinLoadingState
                                style={{ flex: 1}} 
                            />
                        </Content>
                    </Container>
                </Modal>
            )
        } else {
            return null;
        }
    }
}

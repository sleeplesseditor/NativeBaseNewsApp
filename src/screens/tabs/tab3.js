import React, { Component } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';
import { Container, Content, List, Text } from 'native-base';
import { getArticles } from '../../service/news';
import DataItem from '../../components/dataItem';
import ArticleModal from '../../components/modal';

export default class TabThree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      newsData: null,
      setModalVisible: false,
      modalArticleData: {}
    }
  }

  handleItemDataOnClick = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData
    });
  }

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {}
    });
  }

  componentDidMount() {
    getArticles('technology').then(data => {
      this.setState({
        isLoading: false,
        newsData: data
      });
    }, error => {
      Alert.alert('Error', 'Something went wrong...');
    })
  }

  render() {
    let view = this.state.isLoading  ? (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator animating={this.state.isLoading} />
        <Text style={{marginTop: 10, textAlign: 'center'}} children="Loading..." />
      </View>
    ) : (
      <List 
        dataArray={this.state.newsData}
        renderRow={(item) => {
          return <DataItem data={item} onPress={this.handleItemDataOnClick} />
      }} />
    )

    return (
      <Container>
        <Content>
          {view}
        </Content>
        <ArticleModal 
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}
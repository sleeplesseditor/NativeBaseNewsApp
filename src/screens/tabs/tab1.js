import React, { Component } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';
import { Container, Content, List, Text } from 'native-base';
import { getArticles } from '../../service/news';
import DataItem from '../../components/dataItem';

export default class TabOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      newsData: null
    }
  }

  componentDidMount() {
    getArticles().then(data => {
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
          return <DataItem data={item} />
      }} />
    )

    return (
      <Container>
        <Content>
          {view}
        </Content>
      </Container>
    );
  }
}
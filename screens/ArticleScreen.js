import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import GlobalVariable from '../components/GlobalVariable'
class ArticleScreen extends Component {

 render() {
    let action = "Test" + this.props.navigation.state.params.l.name;

      return (
              <Image style={{
                    flex: 1,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                  }}
                  source={require('../img/home.jpg')}>
                    <View>
                      <View style={{alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Details Screen</Text>
                        <Text>{action}</Text>
                      </View>
                    </View>
                </Image>);
  }
}
export default ArticleScreen;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import LoginScreen from './screens/LoginScreen'
import ArticleSummaryScreen from './screens/ArticleSummaryScreen'
import ArticleScreen from './screens/ArticleScreen'
import ProfileScreen from './screens/ProfileScreen'
import GlobalVariable from './components/GlobalVariable'

const deviceW = Dimensions.get('window').width

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

const ArticleNavigator = StackNavigator({
  Article: {
    screen: ArticleSummaryScreen,
    navigationOptions: {
      headerTitle: 'Article',
      headerTintColor: '#FFF',
      headerStyle:{
          backgroundColor: '#3f51b5',
      }
    },
  },
  Details: {
    screen: ArticleScreen,
    navigationOptions: {
        headerTitle: 'Article Details',
        headerTintColor: '#FFF',
        headerStyle:{
            backgroundColor: '#3f51b5',
        }
    },
  },
});

const HomeNavigator = StackNavigator({
  Home: {
      screen: LoginScreen,
      navigationOptions: {
          headerTitle: 'Home',
          headerTintColor: '#FFF',
          headerStyle:{
              backgroundColor: '#3f51b5',
          }
     },
  },
  Profile: {
      screen: ProfileScreen,
      navigationOptions: {
          headerLeft: null,
          headerTitle: 'Profile',
          headerTintColor: '#FFF',
          headerStyle:{
              backgroundColor: '#3f51b5',
          }
     },
  },
});

class ArticleTab extends Component {
  render() {
      return (<ArticleNavigator screenProps={GlobalVariable.authenticated}/>)
    }
}

class HomeTab extends Component {
  render() {
      return (<HomeNavigator/>)
    }
}

export default class App extends Component {
  state= {
    selectedTab: 'home',
    displayArticleTab: 'none'
  };

  render() {
    return (
      <TabNavigator ref="TabNavigator">
        <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            selectedTitleStyle={{color: "#3496f0"}}
            renderIcon={() => <Icon name="home" size={px2dp(22)} color="#666"/>}
            renderSelectedIcon={() => <Icon name="home" size={px2dp(22)} color="#3496f0"/>}
            onPress={() => this.setState({selectedTab: 'home'})}>
            <HomeTab/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'article'}
            title="Article"
            selectedTitleStyle={{color: "#3496f0"}}
            renderIcon={() => <Icon name="book" size={px2dp(22)} color="#666"/>}
            renderSelectedIcon={() => <Icon name="book" size={px2dp(22)} color="#3496f0"/>}
            onPress={() => this.setState({selectedTab: 'article'})}>
            <ArticleTab/>
          </TabNavigator.Item>
      </TabNavigator>
    );
  }
}
AppRegistry.registerComponent('NewsApp', () => App);

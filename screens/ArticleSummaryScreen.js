import React, { Component } from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
import {List, ListItem  } from 'react-native-elements';
import GlobalVariable from '../components/GlobalVariable'
const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
]

class ArticleSummaryScreen extends Component {
  constructor(props) {
        super(props);
        this.state = {
            bodyText: ''
        }
  }

  render() {
    if (this.props.screenProps== 'false') {
       return <Text>Please login</Text>
    } else {
      return <Image style={{
            flex: 1,
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
          source={require('../img/home.jpg')}>
          <View>
              <List>
                  {
                    list.map((l, i) => (
                      <ListItem
                        //roundAvatar
                        avatar={{uri:l.avatar_url}}
                        key={i}
                        subtitle={l.subtitle}
                        title={l.name}
                        onPressRightIcon={() => this.props.navigation.navigate('Details', {l})}
                      />
                    ))
                  }
              </List>
          </View>
      </Image>
    }
  }
}


export default ArticleSummaryScreen;

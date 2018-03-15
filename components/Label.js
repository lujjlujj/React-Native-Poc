import React, { Component } from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';

class Label extends Component {

  render() {
    return (
        <Text
            style={this.props.styles && this.props.styles.textLabel ? this.props.styles.textLabel : styles.textLabel}>
            {this.props.text}
        </Text>
    );
 }
}

const styles = StyleSheet.create({
  textLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    marginBottom: 3,
    marginTop: 10,
    color: '#FFF',
    backgroundColor: 'transparent'
  },
});

export default Label;

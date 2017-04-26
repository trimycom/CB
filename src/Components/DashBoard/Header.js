import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';

const { height } = Dimensions.get('window');

export default class Header extends Component {

  render() {
    return (
      <View style={{ height: height / 6 }}>
      <TouchableOpacity onPress={this.props.onOpen}>
      <Text> Open Menu </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

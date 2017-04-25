import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Authentication extends Component {
  gobackToMain() {
    const { navigator } = this.props;
    navigator.pop({ name: 'MAIN' });
  }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FF0000' }}>
            <Text>Màn hình Authentication </Text>
            <TouchableOpacity onPress={this.gobackToMain.bind(this)}>
            <Text> Go back to Main </Text>
            </TouchableOpacity>
            </View>
        );
    }
}

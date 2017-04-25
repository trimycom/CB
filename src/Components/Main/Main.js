import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Menu from './Menu';

export default class Main extends Component {

    gotoAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTHENTICATION' });
    }

    gotoChangeInfo() {
        const { navigator } = this.props;
        navigator.push({ name: 'CHANGEINFO' });
    }

    render() {
        return (
            <View style={{ backgroundColor: '#0070FF' }}>
            <Text>Main Component </Text>
            <TouchableOpacity onPress={this.gotoAuthentication.bind(this)}>
            <Text> Go tho Authentication </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.gotoChangeInfo.bind(this)}>
            <Text> Go tho ChangeInfo </Text>
            </TouchableOpacity>
            </View>
        );
    }
}

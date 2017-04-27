import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './../Tool/Style';

export default class Menu extends Component {
  gotoAuthentication() {
      const { navigator } = this.props;
      navigator.push({ name: 'AUTHENTICATION' });
  }

  gotoChangeInfo = () => {
      const { navigator } = this.props;
      navigator.push({ name: 'CHANGEINFO' });
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#702E75' }}>
      <Text style={styles.text}> Menu Component </Text>
      <TouchableOpacity onPress={this.gotoChangeInfo.bind(this)}>
      <Text style={styles.text}>Open ChangeInfo </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.gotoAuthentication.bind(this)}>
      <Text>Open Authentication </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

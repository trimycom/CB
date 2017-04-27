import React, { Component } from 'react';
import { Text, View, TouchableOpacity,
  TextInput, Image } from 'react-native';
import icmenu from './../../media/appIcon/ic_menu.png';
import styles from './../Tool/Style';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
      <View style={styles.row1}>
      <TouchableOpacity onPress={this.props.onOpen}>
      <Image source={icmenu} style={styles.iconStyle} />
      </TouchableOpacity>
      <Text style={styles.titleStyle}> Make value for you! </Text>
      </View>
      <TextInput
      style={styles.textInput}
      placeholder="Tìm tên đường"
      />
      </View>
    );
  }
}

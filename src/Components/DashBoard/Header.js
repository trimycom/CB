import React, { Component } from 'react';
import { View, TouchableOpacity,
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
      <TextInput
      style={styles.textInput}
      placeholder="Nhập tên đường"
      underlineColorAndroid="#1e90ff"
      />
      </View>
      </View>
    );
  }
}

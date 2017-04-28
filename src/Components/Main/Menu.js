import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './../Tool/Style';
import icUserblue from './../../media/appIcon/User_gray.png';

export default class Menu extends Component {

constructor(props) {
  super(props);
  this.state = { isLogedIn: true };
}
  gotoAuthentication() {
      const { navigator } = this.props;
      navigator.push({ name: 'AUTHENTICATION' });
  }

  gotoChangeInfo = () => {
      const { navigator } = this.props;
      navigator.push({ name: 'CHANGEINFO' });
  }
  render() {
   const logoutJSX = (
      <View style={{ flex: 1 }}>
      <TouchableOpacity style={styles.MenubtnLogin}>
      <Text style={styles.MenubtnLoginText}>LOGIN</Text>
      </TouchableOpacity>
      </View>
    );
   const loginJSX = (
  <View style={{ flex: 1, alignItems: 'center' }}>
  <Text style={styles.MenuUserText}>Billy</Text>
  <View>
  <TouchableOpacity style={styles.MenubtnLogout} onPress={this.gotoChangeInfo.bind(this)}>
  <Text style={styles.MenubtnLoginText}>CHANGE INFO</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.MenubtnLogout} onPress={this.gotoAuthentication.bind(this)}>
  <Text style={styles.MenubtnLoginText}>LOGOUT</Text>
  </TouchableOpacity>
  </View>
  </View>
  );
const MenuJSX = this.state.isLogedIn ? loginJSX : logoutJSX;
    return (
      <View style={styles.MenuBodyStyle}>
      <Image source={icUserblue} style={styles.MenuUserImgae} />
      { MenuJSX }
      </View>
    );
  }
}

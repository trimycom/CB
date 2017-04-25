import React, {Component} from "react";
import {
  View, Text, Button, StyleSheet
} from "react-native";

export default class css extends Component{
  render(){
    return(
      var styles = StyleSheet.create({
          text:{
            fontSize:20,
            flex:1,
            justifyContent: 'center',
            alignItems: 'center';
            color:'#FBFFFC',
            backgroundColor:'yellow'
          }
        })
    );
  }
}

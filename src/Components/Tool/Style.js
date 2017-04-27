'use strict';
import {
 Dimensions,
  StyleSheet
} from 'react-native';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
export default StyleSheet.create({
  wrapper: {
    height: height / 7,
    backgroundColor: '#34B089',
    padding: 3,
    justifyContent: 'space-around',

  },
  row1: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  },
  textInput: {
  height: height / 15,
  backgroundColor: '#FFF'
 },
 titleStyle: {
  fontSize: 20,
  justifyContent: 'center',
  color: '#FFF',

 },
 iconStyle: {
  width: width / 15,
  height: height / 25
 },
 tabBarIcon: {
  width: width / 15,
  height: height / 25
},
text: {
  color: 'red'
}
});

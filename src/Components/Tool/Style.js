'use strict';
import {
 Dimensions,
  StyleSheet
} from 'react-native';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
export default StyleSheet.create({
  wrapper: {
    height: height / 14,
    backgroundColor: '#1e90ff',
    padding: 3,
    justifyContent: 'space-around',

  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    height: height / 17,
    width: width - (width / 13),
    backgroundColor: '#1e90ff',
    paddingLeft: 5
 },
 titleStyle: {
  fontSize: 20,
  justifyContent: 'center',
  color: '#FFF',

 },
 iconStyle: {
  width: width / 10,
  height: height / 15,
  paddingLeft: 10
 },
 tabBarIcon: {
  width: width / 14,
  height: height / 25
},
LoanBodyStyle: {
  flex: 1,
  backgroundColor: '#ffffff',
  borderWidth: 5,
  borderColor: '#eeeeee',
  borderRadius: 5
},
Loantextinput: {
  justifyContent: 'center',
  alignItems: 'center',
  height: height / 15,
  marginVertical: height / 100
},
LoanbtnResult: {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#1e90ff',
  height: height / 13,
  borderRadius: 5,
  marginLeft: width / 8,
  marginRight: width / 8
},
LoanbtnResultText: {
  color: '#ffffff',
  fontWeight: 'bold'
},
  MenuBodyStyle: {
  flex: 1,
  backgroundColor: '#1e90ff',
  alignItems: 'center',
  borderRightWidth: 3,
  borderColor: '#eeeeee'
},
MenuUserImgae: {
  width: width / 5,
  height: height / 5,
  borderRadius: 5,
  marginVertical: height / 60
},
MenuUserText: {
  color: '#ffffff',
  fontWeight: 'bold',
  marginBottom: 5
},
MenubtnLogin: {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  height: height / 15,
  borderRadius: 5,
  paddingHorizontal: 80
},
MenubtnLoginText: {
  color: '#1e90ff',
  fontWeight: 'bold'
},
MenubtnLogout: {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  height: height / 15,
  borderRadius: 5,
  paddingHorizontal: 60,
  marginTop: 5
}

});

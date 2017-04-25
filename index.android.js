//1. import
import React, { Component } from 'react';
import {
AppRegistry, 
} from 'react-native';
import App from './src/Components/App';

//2. Viết Code
export default class CB extends Component {
render() {
  return ( 
    <App />
  );
}

}
//3. ĐK Component chính

AppRegistry.registerComponent('CB', () => CB);

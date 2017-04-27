import React, { Component } from 'react';
import { Navigator } from 'react-native';
import Main from './Main/Main';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Authentication from './Authentication/Authentication';

export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'MAIN' }}
        renderScene={(route, navigator) => {
          switch (route.name) {
            case 'CHANGEINFO': return <ChangeInfo navigator={navigator} />;
            case 'MAIN': return <Main navigator={navigator} />;
            default: return <Authentication navigator={navigator} />;

          }
        }}
        configureScene={route => {
        if (route.name === 'MAIN') return Navigator.SceneConfigs.FloatFromRight;
          return Navigator.SceneConfigs.FloatFromLeft;
        }}
      />
    );
  }
}

import React, { Component } from 'react';
import { StyleSheet, Navigator } from 'react-native';
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
          if (route.name === 'AUTHENTICATION') return Navigator.SceneConfigs.FloatFromRight;
          return Navigator.SceneConfigs.FloatFromLeft;
        }}
      />
    );
  }
}

//css
const styles = StyleSheet.create({
                    body: {
                    flex: 1,
        backgroundColor: 'green',
        flexDirection: 'row'

    },
    rowtop: {
                    backgroundColor: 'white',
        flex: 1,
        borderWidth: 1,
        borderBottomColor: 'grey',
        height: 40
    },
    textTab: {
                    color: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }

});

// Ket thuc css

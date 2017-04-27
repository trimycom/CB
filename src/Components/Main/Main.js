import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import Menu from './Menu';
import DashBoard from './../DashBoard/DashBoard';


export default class Main extends Component {

    gotoAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTHENTICATION' });
    }

    gotoChangeInfo = () => {
        const { navigator } = this.props;
        navigator.push({ name: 'CHANGEINFO' });
    }

    closeControlPanel = () => {
      this.drawer.close();
    };
    openControlPanel() {
      this.drawer.open();
    }

    render() {
      const { navigator } = this.props;
        return (
          <Drawer
                  ref={(ref) => { this.drawer = ref; }}
                  content={<Menu navigator={navigator} />}
                  tapToClose
                  openDrawerOffset={0.4}
          >
                  <DashBoard open={this.openControlPanel.bind(this)} />
                </Drawer>
        );
    }
}

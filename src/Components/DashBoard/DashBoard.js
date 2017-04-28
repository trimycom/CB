import React, { Component } from 'react';
import { View, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Search from './Search/Search';
import Loan from './Loan/Loan';
import RValue from './RValue/RValue';
import Header from './Header';
import styles from './../Tool/Style';
import icHomeS from './../../media/appIcon/Home_blue.png';
import icHome from './../../media/appIcon/Home_gray.png';
import icSearchS from './../../media/appIcon/Search_blue.png';
import icSearch from './../../media/appIcon/Search_gray.png';
import icLoanS from './../../media/appIcon/Loan_blue.png';
import icLoan from './../../media/appIcon/Loan_gray.png';
import icRValueS from './../../media/appIcon/Real_blue.png';
import icRValue from './../../media/appIcon/Real_gray.png';

export default class DashBoard extends Component {

  constructor(props) {
    super(props);
    this.state = { selectedTab: 'home' };
  }
  openMenu() {
    const { open } = this.props;
    open();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
      <Header onOpen={this.openMenu.bind(this)} />
      <TabNavigator style={{ backgroundColor: '#ffffff' }}>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'home'}
    renderIcon={() => <Image source={icHome} style={styles.tabBarIcon} />}
    renderSelectedIcon={() => <Image source={icHomeS} style={styles.tabBarIcon} />}
    badgeText="10"
    onPress={() => this.setState({ selectedTab: 'home' })}
  >
    <Home />
  </TabNavigator.Item>

  <TabNavigator.Item
    selected={this.state.selectedTab === 'search'}
    renderIcon={() => <Image source={icSearch} style={styles.tabBarIcon} />}
    renderSelectedIcon={() => <Image source={icSearchS} style={styles.tabBarIcon} />}
    onPress={() => this.setState({ selectedTab: 'search' })}
  >
    <Search />
  </TabNavigator.Item>

  <TabNavigator.Item
    selected={this.state.selectedTab === 'rvalue'}
    renderIcon={() => <Image source={icRValue} style={styles.tabBarIcon} />}
    renderSelectedIcon={() => <Image source={icRValueS} style={styles.tabBarIcon} />}
    onPress={() => this.setState({ selectedTab: 'rvalue' })}
  >
    <RValue />
  </TabNavigator.Item>

  <TabNavigator.Item
    selected={this.state.selectedTab === 'loan'}
    renderIcon={() => <Image source={icLoan} style={styles.tabBarIcon} />}
    renderSelectedIcon={() => <Image source={icLoanS} style={styles.tabBarIcon} />}
    onPress={() => this.setState({ selectedTab: 'loan' })}
  >
    <Loan />
  </TabNavigator.Item>

</TabNavigator>
      </View>
    );
  }
}

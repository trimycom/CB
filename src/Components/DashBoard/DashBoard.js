import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Search from './Search/Search';
import Loan from './Loan/Loan';
import RValue from './RValue/RValue';
import Header from './Header';

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
      <View style={{ flex: 1, backgroundColor: '#DEDD51' }}>
      <Header onOpen={this.openMenu.bind(this)} />
      <Text> DashBoard Component </Text>
      <TabNavigator>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'home'}
    title="Home"
    onPress={() => this.setState({ selectedTab: 'home' })}
  >
    <Home />
  </TabNavigator.Item>

  <TabNavigator.Item
    selected={this.state.selectedTab === 'search'}
    title="Search"
    onPress={() => this.setState({ selectedTab: 'search' })}
  >
    <Search />
  </TabNavigator.Item>

  <TabNavigator.Item
    selected={this.state.selectedTab === 'loan'}
    title="Loan"
    onPress={() => this.setState({ selectedTab: 'loan' })}
  >
    <Loan />
  </TabNavigator.Item>

  <TabNavigator.Item
    selected={this.state.selectedTab === 'rvalue'}
    title="R.Value"
    onPress={() => this.setState({ selectedTab: 'rvalue' })}
  >
    <RValue />
  </TabNavigator.Item>

</TabNavigator>
      </View>
    );
  }
}

import React, { Component } from 'react';
import { Text, View, TextInput, Dimensions,
TouchableOpacity, Picker, Item, ListView } from 'react-native';
import styles from './../../Tool/Style';

const { width } = Dimensions.get('window');

export default class Loan extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds,
      PickerSeclected: '1',
      LoanNumber: '0',
      LoanMonth: '0',
      LoanRate: '0',
      Balance: '',
      Principal: '',

   };
   }
   Loanlist() {
    const Loanitems = [];
    for (let i = 1; i <= this.state.LoanMonth; i++) {
      Loanitems.push({
        id: i,
        principal: parseFloat(this.state.LoanNumber / this.state.LoanMonth),
        balance: parseFloat(this.state.Balance - (this.state.LoanNumber / this.state.LoanMonth)),
        interest: parseFloat((this.state.LoanRate * this.state.Balance) / 100),
        payments: parseFloat(((this.state.LoanRate * this.state.Balance) / 100) +
        this.state.Principal),
      });
    }
    this.setState({
        Principal: parseFloat(this.state.LoanNumber / this.state.LoanMonth),
        dataSource: this.state.dataSource.cloneWithRows(Loanitems),
        Balance: parseFloat(this.state.Balance - (this.state.LoanNumber / this.state.LoanMonth))
       });
    }
     renderLoanlist(rowData) {
       return (
         <View style={styles.LoanListResult}>
           <Text>{rowData.id}</Text>
           <Text>{rowData.payments}</Text>
           <Text>{rowData.principal}</Text>
           <Text>{rowData.interest}</Text>
           <Text>{rowData.balance}</Text>
         </View>
       );
     }
  render() {
    return (
      <View style={styles.LoanBodyStyle}>
      <View>
      <Picker
      selectedValue={this.state.PickerSeclected}
      onValueChange={(PickerSeclected) => this.setState({ PickerSeclected })}
      return value
      >
      <Item value={'1'} label={'Vay thế chấp'} />
      <Item value={'2'} label={'Vay tín chấp'} />

      </Picker>
        </View>
      <TextInput
      style={styles.Loantextinput}
      placeholder="Số tiền vay (VND)"
      keyboardType="numeric"
      onChangeText={(LoanNumber, Balance) => this.setState({ LoanNumber, Balance })}
      />
      <View style={styles.row1}>
      <TextInput
      style={[styles.Loantextinput, { width: width - (width / 3) }]}
      placeholder="Thời gian vay (tháng)"
      keyboardType="numeric"
      onChangeText={(LoanMonth) => this.setState({ LoanMonth })}
      />
      <TextInput
      style={[styles.Loantextinput, { width: width - (width / 3) }]}
      placeholder="Lãi suất (%)"
      keyboardType="numeric"
      onChangeText={(LoanRate) => this.setState({ LoanRate })}
      />
      </View>
      <TouchableOpacity style={styles.LoanbtnResult} onPress={this.Loanlist.bind(this)}>
      <Text style={styles.LoanbtnResultText}>KẾT QUẢ</Text>
      </TouchableOpacity>
      <View style={styles.row1}>
        <Text>ID</Text>
        <Text>Payments</Text>
        <Text>Principal</Text>
        <Text>Interest</Text>
        <Text>Balance</Text>
      </View>
        <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderLoanlist}
        />
      </View>


    );
  }
}

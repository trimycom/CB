import React, { Component } from 'react';
import { Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import styles from './../../Tool/Style';

const { width } = Dimensions.get('window');
export default class Loan extends Component {

  LoanResult() {

  }
  render() {
    return (
      <View style={styles.LoanBodyStyle}>
      <TextInput
      style={styles.Loantextinput}
      placeholder="Chọn phương thức vay"
      />
      <TextInput
      style={styles.Loantextinput}
      placeholder="Số tiền vay (VND)"
      />
      <View style={styles.row1}>
      <TextInput
      style={[styles.Loantextinput, { width: width - (width / 3) }]}
      placeholder="Thời gian vay (tháng)"
      />
      <TextInput
      style={[styles.Loantextinput, { width: width - (width / 3) }]}
      placeholder="Lãi suất (%)"
      />
      </View>
      <TouchableOpacity style={styles.LoanbtnResult} onPress={this.LoanResult.bind(this)}>
      <Text style={styles.LoanbtnResultText}>KẾT QUẢ</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

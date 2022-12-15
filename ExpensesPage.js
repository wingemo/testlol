import React, { useState } from 'react';
import { View, TextInput, Button, Picker } from 'react-native-elements';
import { connect } from 'react-redux';

const ExpensesPage = ({ groups, expenses, addExpense }) => {
  const [selectedGroup, setSelectedGroup] = useState('');
  const [amount, setAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');

  const addExpense = () => {
    if (selectedGroup) {
      addExpense({ group: selectedGroup, amount, paymentMethod });
    }
  }

  return (
    <View>
      <Picker
        selectedValue={selectedGroup}
        onValueChange={setSelectedGroup}
      >
        <Picker.Item label="Select group" value="" />
        {groups.map((group) => (
          <Picker.Item key={group.name} label={group.name} value={group} />
        ))}
      </Picker>
      <TextInput
        placeholder="Enter expense amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <TextInput
        placeholder="Enter payment method"
        value={paymentMethod}
        onChangeText={setPaymentMethod}
      />
      <Button
        title="Add expense"
        onPress={addExpense}
      />
      <FlatList
        data={expenses}
        renderItem={({ item }) => (
          <View>
            <Text>{item.amount}</Text>
            <Text>{item.paymentMethod}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const mapStateToProps = (state) => ({
  expenses: state.expenses
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch({ type: 'ADD_EXPENSE', expense }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesPage);

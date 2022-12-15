import React, { useState } from 'react';
import { View, TextInput, Button, FlatList } from 'react-native-elements';

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (amount, paymentMethod) => {
    setExpenses([...expenses, { amount, paymentMethod }]);
  }

  return (
    <View>
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
        onPress={() => addExpense(amount, paymentMethod)}
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

export default ExpensesPage;

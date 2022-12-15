import React from 'react';
import { View, TextInput, Button, FlatList } from 'react-native-elements';
import { connect } from 'react-redux';

const ExpensesPage = ({ expenses, addExpense }) => {
  const [amount, setAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');

  const addExpense = () => {
    addExpense({ amount, paymentMethod });
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

import React from 'react';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import GroupCreationPage from './GroupCreationPage';
import ExpensesPage from './ExpensesPage';

const initialState = {
  group: {
    name: '',
    members: []
  },
  expenses: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GROUP_NAME':
      return { ...state, group: { ...state.group, name: action.name } };
    case 'ADD_MEMBER':
      return { ...state, group: { ...state.group, members: [...state.group.members, action.member] } };
    case 'ADD_EXPENSE':
      return { ...state, expenses: [...state.expenses, action.expense] };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <View>
      <GroupCreationPage />
      <ExpensesPage />
    </View>
  </Provider>
);

export default App;

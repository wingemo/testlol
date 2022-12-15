import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
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

const AppNavigator = createStackNavigator({
  GroupCreation: {
    screen: GroupCreationPage,
  },
  Expenses: {
    screen: ExpensesPage,
  },
}, {
  initialRouteName: 'GroupCreation',
});

const App = () => {
  const AppContainer = createApp

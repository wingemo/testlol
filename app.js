import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import GroupCreationPage from './GroupCreationPage';
import ExpensesPage from './ExpensesPage';

const initialState = {
  groups: [],
  expenses: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_GROUP':
      return { ...state, groups: [...state.groups, action.group] };
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
  const AppContainer = createAppContainer(AppNavigator);

  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;

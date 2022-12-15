import React from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { NavigationContainer, Stack } from '@react-navigation/native';

// Root component
class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Group Creation" component={GroupCreationPage} />
          <Stack.Screen name="Expenses" component={ExpensesPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// Group creation component
class GroupCreationPage extends React.Component {
  state = {
    groupName: '',
    memberName: '',
  };

  handleGroupNameChange = (groupName) => {
    this.setState({ groupName });
  };

  handleMemberNameChange = (memberName) => {
    this.setState({ memberName });
  };

  handleAddMember = () => {
    const { groupName, memberName } = this.state;
    if (memberName) {
      this.props.addMember(groupName, memberName);
      this.setState({ memberName: '' });
    }
  };

  render() {
    const { groupName, memberName } = this.state;
    const { members } = this.props;

    return (
      <View>
        <TextInput
          placeholder="Enter group name"
          value={groupName}
          onChangeText={this.handleGroupNameChange}
        />
        <TextInput
          placeholder="Enter member name"
          value={memberName}
          onChangeText={this.handleMemberNameChange}
          onSubmitEditing={this.handleAddMember}
        />
        <FlatList
          data={members}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

import React from 'react';
import { View, TextInput, Button, FlatList } from 'react-native-elements';
import { connect } from 'react-redux';

const GroupCreationPage = ({ group, setGroupName, addMember, addGroup }) => {
  const addMember = (name) => {
    addMember(name);
  }

  const handleSubmit = () => {
    addGroup(group);
  }

  return (
    <View>
      <TextInput
        placeholder="Enter group name"
        value={group.name}
        onChangeText={setGroupName}
      />
      <Button
        title="Add member"
        onPress={() => addMember(name)}
      />
      <FlatList
        data={group.members}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.name}
      />
      <Button
        title="Finish"
        onPress={handleSubmit}
      />
    </View>
  );
}

const mapStateToProps = (state) => ({
  group: state.group
});

const mapDispatchToProps = (dispatch) => ({
  setGroupName: (name) => dispatch({ type: 'SET_GROUP_NAME', name }),
  addMember: (member) => dispatch({ type: 'ADD_MEMBER', member }),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupCreationPage);

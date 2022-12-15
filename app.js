import React, { useState } from 'react';
import { View, TextInput, Button, FlatList } from 'react-native-elements';

const GroupCreationPage = () => {
  const [groupName, setGroupName] = useState('');
  const [members, setMembers] = useState([]);

  const addMember = (name) => {
    setMembers([...members, name]);
  }

  return (
    <View>
      <TextInput
        placeholder="Enter group name"
        value={groupName}
        onChangeText={setGroupName}
      />
      <Button
        title="Add member"
        onPress={() => addMember(name)}
      />
      <FlatList
        data={members}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

export default GroupCreationPage;

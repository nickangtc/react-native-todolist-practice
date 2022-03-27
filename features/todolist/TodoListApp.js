import React, {useReducer} from 'react';
import {
  TextInput,
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {actionCreators, initialState, reducer} from './todos-controller';

const Input = ({onSubmitEditing}) => {
  const [inputText, setInputText] = React.useState('');
  const onChangeText = text => {
    setInputText(text);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        onSubmitEditing={() => {
          onSubmitEditing(inputText);
          setInputText('');
        }}
        value={inputText}
        placeholder="Add a todo"
      />
    </View>
  );
};

const List = ({todos, onPress}) => {
  return (
    <FlatList
      data={todos}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            style={styles.listItem}
            key={item.id}
            onPress={() => onPress(item.id)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export const TodoListApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {todos} = state;

  return (
    <View>
      <Text>Click to remove</Text>
      <Input onSubmitEditing={title => dispatch(actionCreators.add(title))} />
      <List todos={todos} onPress={id => dispatch(actionCreators.remove(id))} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 32,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  listItem: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#eee',
  },
});

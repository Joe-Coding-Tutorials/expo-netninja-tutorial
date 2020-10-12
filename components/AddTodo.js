import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, TextInput } from 'react-native';

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('');
  let textInput = null;

  const addTodo = () => {
    submitHandler(text);
    textInput.clear();
    setText('');
  };

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='New todo...'
        onChangeText={changeHandler}
        ref={(input) => {
          textInput = input;
        }}
        onSubmitEditing={addTodo}
      />
      <Button onPress={addTodo} title='Add Todo' color='coral' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

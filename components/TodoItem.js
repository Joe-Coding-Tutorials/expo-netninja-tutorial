import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {
  const confirm = (key) =>
    Alert.alert('Are you sure', 'Delete this todo?', [
      { text: 'Cancel' },
      { text: 'OK', onPress: () => pressHandler(key) },
    ]);

  return (
    <TouchableOpacity onPress={() => confirm(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name='delete' size={18} color='#333' />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
  },
  text: {
    marginLeft: 10,
  },
});

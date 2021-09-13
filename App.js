import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [input, setInput] = useState('')
  const [toDoList, setToDoList] = useState([])

  const handleAdd = () => {
    setToDoList(prev => [...prev, input])
    setInput('')
  }

  const handleDelete = itemToDelete => {
    setToDoList(prev => prev.filter(item => item != itemToDelete))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do App</Text>
      <View style={styles.toDoInputContainer}>
        <TextInput style={styles.todoInput} value={input} onChangeText={text => setInput(text)} />
        <Button style={styles.addBtn} title='Add' onPress={handleAdd} />
      </View>
      <View>
        <FlatList 
          keyExtractor={(item, index) => index}
          data={toDoList}
          renderItem={li => (
            <TouchableOpacity onPress={() => handleDelete(li.item)}>
              <View style={styles.listItem}>
                <Text>{li.item}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    height: 100
  },
  toDoInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 30
  },
  todoInput: {
    flex: 10,
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: '#5a5a5a'
  },
  addBtn: {
    flex: 2,
    borderRadius: 5,
    backgroundColor: 'red'
  },
  listItem: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20
  }
});

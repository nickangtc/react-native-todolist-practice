/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

import {TodoListApp} from './features/todolist/TodoListApp';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Text style={styles.headerText}>My Todos</Text>
      </ScrollView>
      <TodoListApp />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 32,
  },
});

export default App;

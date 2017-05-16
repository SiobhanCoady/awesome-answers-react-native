import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import QuestionsScreen from './components/QuestionsScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title='Questions' />
        <QuestionsScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

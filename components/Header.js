import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function Header (props) {
  const { title = '' } = props;
  return (
    <View style={styles.header}>
      <View style={styles.spacer} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: 'whitesmoke'
  },
  spacer: {
    height: 20,
    backgroundColor: 'gainsboro'
  },
  title: {
    fontSize: 18,
    color: 'deepskyblue'
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Header;

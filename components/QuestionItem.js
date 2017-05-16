import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

function QuestionItem(props) {
  const {
    id, title, body, created_at, onPress = () => {}, expand = false
  } = props;

  const handlePress = () => {
    onPress(id);
  }

  const expandableContent = expand
    ? (
      <View>
        <Text style={styles.bodyText}>{body}</Text>
        <Text style={[styles.bodyText, {fontStyle: 'italic'}]}>{created_at}</Text>
      </View>
    ) : (
      <View />
    )

  return (
    <TouchableHighlight onPress={handlePress}>
      <View style={styles.container}>
        <Text style={expand ? styles.expandedTitle : styles.title}>
          {title}
        </Text>
        { expandableContent }
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  title: {
    padding: 5,
    fontSize: 14
  },
  expandedTitle: {
    padding: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'deepskyblue'
  },
  bodyText: {
    color: 'deepskyblue',
    fontSize: 12,
    padding: 5
  }
})

export default QuestionItem;

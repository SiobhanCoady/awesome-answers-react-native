import React from 'react';
import { ListView, Text, View, StyleSheet } from 'react-native';
import QuestionItem from './QuestionItem';

function QuestionList (props) {
  const { data = [], onQuestionPress = () => {} } = props;

  const ds = new ListView.DataSource({
    rowHasChanged (r1, r2) { return r1 !== r2 }
  });

  return (
    <ListView
      dataSource={ds.cloneWithRows(data)}
      renderRow={
        (question) => <QuestionItem {...question} onPress={onQuestionPress} />
      }
      enableEmptySections
      renderSeparator={
        () => <View style={{height: 1, backgroundColor: 'whitesmoke'}} />
      }
    />
  );
}

export default QuestionList;

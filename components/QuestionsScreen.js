import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import QuestionList from './QuestionList';
import { getQuestions, getQuestion } from '../utilities/requests';

class QuestionsScreen extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      questions: []
    }

    this.openQuestion = this.openQuestion.bind(this);
  }

  openQuestion (id) {
    getQuestion(id)
      .then(nextQuestion => {
        const questions = this.state.questions.map(
          prevQuestion => {
            if (nextQuestion.id === prevQuestion.id) {
              return Object.assign({}, nextQuestion, {expand: true});
            } else {
              return Object.assign({}, prevQuestion, {expand: false});
            }
          }
        );

        this.setState({questions});
      });
  }

  componentDidMount () {
    getQuestions()
      .then(questions => {
        this.setState({questions});
      });
  }

  render () {
    const {questions} = this.state;

    return (
      <View style={styles.container}>
        <QuestionList data={questions} onQuestionPress={this.openQuestion} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default QuestionsScreen;

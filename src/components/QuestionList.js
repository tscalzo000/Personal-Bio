import React from 'react';
import Question from './Question'

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedQuestionId: null
    }
    this.handleQuestionClick = this.handleQuestionClick.bind(this)
  }

  handleQuestionClick(id) {
    let selectedId = id;
    if(id == this.state.selectedQuestionId) {
      selectedId = null;
    }
    this.setState({ selectedQuestionId: selectedId });
  }

  render() {
    let questions = this.props.data.map(question => {
      let clicked = false;

      if (question.id === this.state.selectedQuestionId) {
        clicked = true;
      }

      let onQuestionClick = () => this.handleQuestionClick(question.id);

      return(
        <Question
          clicked = {clicked}
          key = {question.id}
          question = {question}
          handleClick = {onQuestionClick}
        />
      )
    })
    return(
      <ul>
        {questions}
      </ul>
    )
  }
}

export default QuestionList;

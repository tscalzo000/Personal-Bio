import React, {Component} from 'react';
import Question from './Question';

class QuestionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedQuestionId: null,
      questionsAndAnswers: [],
      error: ''
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:8080/api/v1/questions')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          throw(new Error(`${response.status} (${response.statusText})`));
        }
      })
      .then(response => response.json())
      .then(questionsAndAnswers => this.setState({questionsAndAnswers}))
      .catch(error => this.setState({error}))
  }

  handleClick = id => {
    this.setState(prevState => ({
      selectedQuestionId: id === prevState.selectedQuestionId ? null : id
    }));
  }

  render() {
    return (
      <ul>
        {this.state.questionsAndAnswers.length > 0 &&
          this.state.questionsAndAnswers.map(pair => (
          <Question
            key={pair.id}
            isButtonClicked={this.state.selectedQuestionId === pair.id}
            questionAnswerPair={pair}
            onClick={this.handleClick}
          />
        ))}
      </ul>
    )
  }
}

export default QuestionContainer;

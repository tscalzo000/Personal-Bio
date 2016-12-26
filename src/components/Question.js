import React from 'react';

const Question = props => {

  let answer;
  if (props.clicked) {
    answer = props.question.answer;
  } else {
    answer = '';
  }

  let buttonId;
  if (props.clicked) {
    buttonId = 'buttonOpen';
  } else {
    buttonId = 'buttonClose';
  }

  let button;
  if (props.clicked) {
    button = '-';
  } else {
    button = '+';
  }

  return(
    <div id='question'>
      <p className='text-left' >
        <i className='button' id={buttonId} onClick={props.handleClick}>{button}</i>
        {props.question.question}
      </p>
      <p className='text-left'>
        {answer}
      </p>
    </div>
  )
}

export default Question;

import React, {Fragment} from 'react';

const Question = ({
  isButtonClicked,
  onClick,
  questionAnswerPair: {id, question, answer}
}) => {
  return (
    <div className='question'>
      <p className='text-left' >
        <i
          className={`button ${isButtonClicked ? 'buttonOpen' : 'buttonClose'}`}
          onClick={() => onClick(id)}
        >
          {isButtonClicked ? '-' : '+'}
        </i>
        {question}
      </p>
      {isButtonClicked &&
        <p className='text-left'>
          {answer.split(' ').map((word, index) => (
            <Fragment>
              {word.indexOf('.com') > -1 ? (
                <Fragment>
                  {index !== 0 && ' '}
                  <a href={word}>
                    {word}
                  </a>
                </Fragment>
              ):(
                <Fragment>
                  {index !== 0 && ' '}{word}
                </Fragment>
              )}
            </Fragment>
          ))}
        </p>
      }
    </div>
  )
}

export default Question;

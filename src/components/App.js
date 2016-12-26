import React from 'react';
import QuestionList from './QuestionList'

const App = props => {
  return(
    <div className='small text-center'>
      <h1>Tori Scalzo</h1>
      <QuestionList data={props.data}/>
    </div>
  )
};


export default App;

import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState('');

  const handlerInput = (e) => {
    setInputText(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const newArray = [...tasks];

    if (inputText !== undefined && inputText !== '') {
      newArray.push(inputText);
      setTasks(newArray);
      e.target.reset();
      setInputText('');
    }
  };

  const checkButton = (e, index) => {
    console.log(index);
  };

  return (
    <form onSubmit={handlerSubmit} className='App'>
      <h1>Todos</h1>

      <div>
        <input
          type='text'
          value={inputText}
          onChange={handlerInput}
          placeholder='Enter a Todo...'
        />
      </div>

      <div className='todoContainer'>
        {tasks.map((task, index) => (
          <div className='todoItem' key={index.toString()}>
            <input type='checkbox' onClick={(e) => checkButton(e, index)} />
            <div>{task}</div>
          </div>
        ))}
      </div>
    </form>
  );
}

export default App;

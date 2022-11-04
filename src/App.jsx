import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(['task1', 'task2']);

  let inputStringValue;

  const inputString = (e) => {
    inputStringValue = e.target.value;
  };

  const onButtonClick = (e) => {
    const newArray = [...tasks];
    console.log(inputStringValue);
    if (inputStringValue !== undefined) {
      newArray.push(inputStringValue);
      setTasks(newArray);
    }

    e.preventDefault();
  };

  const checkButton = (e, index) => {
    console.log(index);
    // console.log(e.target.value);
    // e.preventDefault();
  };

  return (
    <form onSubmit={onButtonClick} className='App'>
      <h1>Todos</h1>
      <div>
        <input type='text' onChange={inputString} />
        {/* <input type='submit' value='Submit' /> */}
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

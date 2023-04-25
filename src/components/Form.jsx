import { useState } from 'react';
import List from './List';

const Form = () => {
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

  const onDeleteHandle = (index) => {
    const newArray = [...tasks];
    newArray.splice(index, 1);
    setTasks(newArray);
  };

  return (
    <>
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
      </form>
      <List tasks={tasks} onDeleteTodo={onDeleteHandle} />
    </>
  );
};
export default Form;

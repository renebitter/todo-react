import { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Todo = ({ task, onDelete }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    console.log(checked);
  };

  return (
    <div>
      <div className='todoItem' style={{ alignItems: 'center' }}>
        <input type='checkbox' onClick={handleChange} />

        {checked ? (
          <div style={{ color: 'red', textDecoration: 'line-through' }}>
            {task}
          </div>
        ) : (
          <div>{task}</div>
        )}
        <button
          type='checkbox'
          onClick={onDelete}
          style={{
            marginLeft: 'auto',
            height: '35px',
            width: '35px',
            padding: '2px',
            textAlign: 'center',
          }}>
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};
export default Todo;

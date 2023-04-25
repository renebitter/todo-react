const checkButton = (e, index) => {
  console.log(index);
};

const Todo = ({ task, index }) => {
  return (
    <div>
      <div className='todoItem'>
        <input type='checkbox' onClick={(e) => checkButton(e, index)} />
        <div>{task}</div>
      </div>
    </div>
  );
};
export default Todo;

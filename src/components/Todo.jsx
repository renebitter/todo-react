const checkButton = (e, index) => {
  console.log(index);
};

const Todo = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <div className='todoItem' key={index.toString()}>
          <input type='checkbox' onClick={(e) => checkButton(e, index)} />
          <div>{task}</div>
        </div>
      ))}
    </div>
  );
};
export default Todo;

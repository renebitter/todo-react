import Todo from './Todo';

const List = ({ tasks }) => {
  return (
    <div className='todoContainer'>
      {tasks.map((task, index) => (
        <Todo task={task} key={index.toString()} />
      ))}
    </div>
  );
};
export default List;

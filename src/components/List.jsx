import Todo from './Todo';

const List = ({ tasks, onDelete, onDeleteTodo }) => {
  return (
    <div className='todoContainer'>
      {tasks.map((task, index) => (
        <Todo
          task={task}
          key={index.toString()}
          index={index}
          onDelete={() => onDeleteTodo(index)}
        />
      ))}
    </div>
  );
};
export default List;

import Todo from './Todo';

const List = ({ tasks }) => {
  return (
    <div className='todoContainer'>
      <Todo tasks={tasks} />
    </div>
  );
};
export default List;

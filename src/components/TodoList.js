import { useSelector } from 'react-redux';

const TodoList = () => {
  const todo_lists = useSelector((state) => state.todo_lists)

  return (
    <ul>
      {todo_lists.map((todo, index) => (
        <li key={index}>{todo.title} {todo.time_limit}</li>
      ))}
    </ul>
  );
};

export default TodoList;

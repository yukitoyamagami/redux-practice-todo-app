import { useSelector } from 'react-redux';

const TodoList = () => {
  const todo_lists = useSelector((state) => state.todo_lists)

  return (
    <ul>
      {todo_lists.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;

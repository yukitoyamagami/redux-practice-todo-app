import { useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const TodoList = () => {
  const todo_lists = useSelector((state) => state.todo_lists)

  return (
    <ul>
      {todo_lists.map((todo, index) => (
        <div key={index}>
          {todo.title} {todo.time_limit}
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </div>
      ))}
    </ul>
  );
};

export default TodoList;

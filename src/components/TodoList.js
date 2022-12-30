import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { TodoListActionTypes } from '../store/index';


const TodoList = () => {
  const todo_lists = useSelector((state) => state.todo_lists)
  const dispatch = useDispatch();

  const DeleteTodoFromList = (title) => {
    dispatch({
      type: TodoListActionTypes.DELETE,
      payload: title
    });
  };

  return (
    <ul>
      {todo_lists.map((todo, index) => (
        <div key={index}>
          {todo.title} {todo.time_limit}
          <IconButton aria-label="delete" onClick={() => DeleteTodoFromList(todo.title)} >
            <DeleteIcon/>
          </IconButton>
        </div>
      ))}
    </ul>
  );
};

export default TodoList;

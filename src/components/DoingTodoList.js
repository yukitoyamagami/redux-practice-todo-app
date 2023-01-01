import { useDispatch } from 'react-redux';
import { TodoListActionTypes } from '../store/index';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const DoingTodoList = ({
  todo_lists,
}) => {
  const dispatch = useDispatch();

  const DeleteTodoFromList = (title) => {
    dispatch({
      type: TodoListActionTypes.DELETE,
      payload: title
    });
  };


  return(
    <ul>
      {todo_lists.map((todo, index) => (
        <div key={index}>
          {todo.title}
          <IconButton aria-label="delete" onClick={() => DeleteTodoFromList(todo.title)} >
            <DeleteIcon/>
          </IconButton>
        </div>
      ))}
    </ul>
  );
};

export default DoingTodoList;

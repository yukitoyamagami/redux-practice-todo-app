import { useDispatch } from 'react-redux';
import { todoListActionTypes } from '../reducers/todo_list';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const CompletedTodoList = ({
  todo_lists,
  on_click_todo,
}) => {
  const dispatch = useDispatch();

  const DeleteTodoFromList = (title) => {
    dispatch({
      type: todoListActionTypes.DELETE,
      payload: title
    });
  };

  return (
    <DragDropContext>
      <Droppable droppableId="completed_todos">
      {(provided) => (
        <ul className="completed_todos" {...provided.droppableProps} ref={provided.innerRef}>
            {todo_lists.map((todo, index) => {
              return (
              <Draggable key={todo.id} draggableId={todo.id} index={index}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}  onClick={() => on_click_todo(todo)}>
                    {todo.title}
                    <IconButton aria-label="delete" onClick={() => DeleteTodoFromList(todo.title)} >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                )}
              </Draggable>
              )
            }
            )}
        </ul>
      )}
      </Droppable>
    </DragDropContext>
  );
};

export default CompletedTodoList;

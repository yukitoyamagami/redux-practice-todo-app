import { useDispatch } from 'react-redux';
import { TodoListActionTypes } from '../store/index';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const CompletedTodoList = ({
  todo_lists,
}) => {
  const dispatch = useDispatch();

  const DeleteTodoFromList = (title) => {
    dispatch({
      type: TodoListActionTypes.DELETE,
      payload: title
    });
  };

  return (
    <DragDropContext>
      <Droppable droppableId="completed_todos">
      {(provided) => (
        <ul className="completed_todos" {...provided.droppableProps} ref={provided.innerRef}>
            {todo_lists.map(({id, title}, index) => {
              return (
              <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    {title}
                    <IconButton aria-label="delete" onClick={() => DeleteTodoFromList(title)} >
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

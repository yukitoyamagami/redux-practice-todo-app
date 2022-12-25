import React, { useState } from 'react';
import AddTodoListButton from './Buttons/AddTodoListButton'
import { useDispatch } from 'react-redux';
import { TodoListActionTypes } from '../store/index';

const ListInput = () => {
  const dispatch = useDispatch();
  const [title, setText] = useState("");
  const [time_limit, setTimeLimit] = useState("");

  const InputText = (e) => {
    setText(e.target.value)
  };

  const InputTimeLimit = (e) => {
    setTimeLimit(e.target.value)
  };

  const AddTodoList = () => {
    if (!title || !time_limit) return;
    dispatch({
        type: TodoListActionTypes.ADD,
        payload: {
          title,
          time_limit,
        }
    });
    setText("")
    setTimeLimit("")
  };

  return (
    <div className="ListInput">
      <input value={title} onChange={InputText} />
      <input type="date" value={time_limit} onChange={InputTimeLimit} />
      <AddTodoListButton onClick={AddTodoList} />
    </div>
  );
};

export default ListInput;

import React, { useState } from 'react';
import AddTodoListButton from './Buttons/AddTodoListButton'
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import { todoListActionTypes } from '../reducers/todo_list';

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
    if (!title || !time_limit) {
      alert("TODOが入力されていません")
      return;
    }
    dispatch({
        type: todoListActionTypes.ADD,
        payload: {
          title,
          time_limit,
        }
    });
    setText("")
    setTimeLimit("")
  };

  return (
    <div>
      <div className="ListInput">
        <TextField value={title} onChange={InputText} />
        <TextField type="date" value={time_limit} onChange={InputTimeLimit} />
      </div>
      <div className="ListInput">
        <AddTodoListButton onClick={AddTodoList} />
      </div>
    </div>
  );
};

export default ListInput;

import React, { useState } from 'react';
import AddTodoListButton from './Buttons/AddTodoListButton'

const ListInput = () => {
  const [text, setText] = useState();

  const InputText = (e) => {
    setText(e.target.value)
  };

  return (
    <div className="ListInput">
      <input value={text} onChange={InputText}/>
      <AddTodoListButton />
    </div>
  );
};

export default ListInput;

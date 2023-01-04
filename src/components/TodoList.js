import { useSelector } from 'react-redux';
import DoingTodoList from './DoingTodoList.js';
import CompletedTodoList from './CompletedTodoList.js';

const TodoList = () => {
  const todo_lists = useSelector((state) => state.todoListReducer.todo_lists)

  return (
    <div>
      <h2>実施中TODO一覧</h2>
      <DoingTodoList
        todo_lists={todo_lists.filter((list) => list.status === "doing")}
        on_click_todo={() => console.log("click todo!")}
      />
      <h2>完了TODO一覧</h2>
      <CompletedTodoList
        todo_lists={todo_lists.filter((list) => list.status === "completed")}
        on_click_todo={() => console.log("click todo!")}
      />
    </div>
  );
};

export default TodoList;

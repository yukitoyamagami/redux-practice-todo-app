import { legacy_createStore } from "redux";

const initialState = {
  todo_lists: [
    {
      id: "1",
      title: "初期設定1",
      time_limit: "2022/1/1",
      status: "completed"
    },
    {
      id: "2",
      title: "初期設定2",
      time_limit: "2022/1/1",
      status: "completed"
    },
    {
      id: "3",
      title: "初期設定3",
      time_limit: "2022/1/1",
      status: "doing"
    },
  ]
}

export const TodoListActionTypes = {
  ADD: 'ADD',
  DELETE: 'DELETE',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TodoListActionTypes.ADD:
      return {
         todo_lists: [...state.todo_lists, action.payload],
      };
    case TodoListActionTypes.DELETE:
      return {
         todo_lists: [...state.todo_lists.filter((list) => list.title !== action.payload)],
      };
    default:
      return {
          ...state,
      };
  };
}

const store = legacy_createStore(reducer);

export default store;

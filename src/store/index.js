import { legacy_createStore } from "redux";

const initialState = {
  todo_lists: [
    {
      title: "初期設定1",
      time_limit: 2022/1/1,
      status: "completed"
    },
    {
      title: "初期設定2",
      time_limit: 2022/1/1,
      status: "completed"
    }
  ]
}

export const TodoListActionTypes = {
  ADD: 'ADD',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TodoListActionTypes.ADD:
      return {
         todo_lists: [...state.todo_lists, action.payload],
      };
    default:
      return {
          ...state,
      };
  };
}

const store = legacy_createStore(reducer);

export default store;

export const initialState = {
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

export const todoListActionTypes = {
  ADD: 'ADD',
  DELETE: 'DELETE',
  COMPLETE: 'COMPLETE',
}

export const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case todoListActionTypes.ADD:
      return {
         todo_lists: [...state.todo_lists, action.payload],
      };
    case todoListActionTypes.DELETE:
      return {
         todo_lists: [...state.todo_lists.filter((list) => list.title !== action.payload)],
      };
    case todoListActionTypes.COMPLETE:
      return {
        todo_lists: state.todo_lists.map((list) => {
          if (list.title !== action.payload) return list
          return {
            ...list,
            status: "completed"
          };
        }),
      };
    default:
      return {
          ...state,
      };
  };
}

import { legacy_createStore } from "redux";

const initialState = {
  todo_lists: [
    {
      title: "初期設定1",
      by_when: 1 / 1,
      status: "completed"
    },
    {
      title: "初期設定2",
      by_when: 1 / 1,
      status: "completed"
    }
  ]
}

const reducer = (state = initialState, action) => {
  return state
}

const store = legacy_createStore(reducer);

export default store;

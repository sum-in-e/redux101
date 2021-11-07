import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

/**
 * @remarks
 * 할 일을 추가하는 액션 함수
 *
 * @returns action
 */
const addToDoAction = (text) => {
  return { type: ADD, text };
};

/**
 * @remarks
 * 할 일을 제거하는 액션 함수
 *
 * @returns action
 */
const deleteToDoAction = (id) => {
  return { type: DELETE, id };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      const newToDo = { text: action.text, id: Date.now() };
      return [newToDo, ...state];
    case DELETE:
      const newToDos = state.filter((toDo) => toDo.id !== Number(action.id));
      return newToDos;
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDoAction,
  deleteToDoAction,
};

export default store;

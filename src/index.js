import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD = "ADD";
const DELETE = "DELETE";

// 액션을 리턴하는 액션함수(액션만을 리턴)를 생성하여 dispatch에 인자로 전달. 주로 리듀서 위에 배치한다.
const deleteToDoAction = (id) => {
  return { type: DELETE, id };
};

const addToDoAction = (text) => {
  return { type: ADD, text };
};

const toDoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      const newToDo = { id: Date.now(), text: action.text };
      return [newToDo, ...state];
    case DELETE:
      const newToDos = state.filter((toDo) => toDo.id !== Number(action.id));
      return newToDos;
    default:
      return state;
  }
};

const toDoStore = createStore(toDoReducer);

const dispatchDeleteToDo = (e) => {
  const id = e.target.parentNode.id;
  toDoStore.dispatch(deleteToDoAction(id));
};

const paintToDos = () => {
  const toDos = toDoStore.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.addEventListener("click", dispatchDeleteToDo);

    button.innerText = "DEL";
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(button);
    ul.appendChild(li);
  });
};

// 하나의 함수가 하나의 작업을 수행하도록 최적화했다. 함수가 하는 일을 직관적으로 알 수 있도록 네이밍 하자.
const dispatchAddToDo = (text) => {
  toDoStore.dispatch(addToDoAction(text));
};

const handleSubmitToDo = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

toDoStore.subscribe(paintToDos);

form.addEventListener("submit", handleSubmitToDo);

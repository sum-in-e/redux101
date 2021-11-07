import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/Todo";
import { actionCreators } from "../store";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");

  const handleChangeText = (e) => {
    const updatedText = e.target.value;
    setText(updatedText);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    addToDo(text);
    setText("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={handleSubmitForm}>
        <input type="text" value={text} onChange={handleChangeText} />
        <button type="submit">추가</button>
      </form>
      <ul>
        {toDos.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}

/**
 * @remarks
 * Home 컴포넌트에 전달할 dispatch props를 return하는 함수
 *
 * @param state - 현재 store의 state
 * @param ownProps - 현재 컴포넌트가 받는 props
 *
 * @returns state
 */
function mapDisptchToProps(dispatch, ownProps) {
  return {
    // addToDo 액션으로 dispatch하는 함수를 만들어서 return
    addToDo: (text) => dispatch(actionCreators.addToDoAction(text)),
  };
}

/**
 * @remarks
 * Home 컴포넌트에 전달할 state props를 return하는 함수
 *
 * @param state - 현재 store의 state
 * @param ownProps - 현재 컴포넌트가 받는 props
 *
 * @returns state
 */
function mapStateToProps(state) {
  return { toDos: state };
}

// connect를 이용해 mapStateToProps와 mapDisptchToProps에서 return하는 것을 Home 컴포넌트에 props로 전달한다.
// connect(mapStateToProps, mapDisptchToProps)
export default connect(mapStateToProps, mapDisptchToProps)(Home);

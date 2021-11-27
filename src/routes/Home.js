import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/Todo";
import { addToDo } from "../store";

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

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDisptchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(addToDo(text)),
  };
}

// connect를 이용해 mapStateToProps와 mapDisptchToProps에서 return하는 것을 Home 컴포넌트에 props로 전달한다.
// connect(mapStateToProps, mapDisptchToProps)
export default connect(mapStateToProps, mapDisptchToProps)(Home);

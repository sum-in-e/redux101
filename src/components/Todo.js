import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

function ToDo({ id, text, handleClickDelete }) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text}
        <button onClick={handleClickDelete}>삭제</button>
      </Link>
    </li>
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
    // deleteToDo 액션으로 dispatch하는 함수를 만들어서 return
    // Home에서와 달리 ownProps로 id를 가져올 수 있기 때문에 deleteToDo 실행 시 id를 인자로 전달할 필요가 없다.
    // 그래서 애초에 click시 deleteToDo하는 함수를 만들어서 return하여 그걸 그대로 onClick 시 사용하도록 하면 됨.
    handleClickDelete: () =>
      dispatch(actionCreators.deleteToDoAction(ownProps.id)),
  };
}

export default connect(null, mapDisptchToProps)(ToDo);

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToDo } from "../store";

function ToDo({ id, text, handleClickDelete }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={handleClickDelete}>삭제</button>
    </li>
  );
}

/**
 * @remarks
 * Home 컴포넌트에 전달할 dispatch props를 return하는 함수
 *
 * @param dispatch - dispatch 함수
 * @param ownProps - 현재 컴포넌트가 받는 props
 *
 * @returns state
 */
function mapDisptchToProps(dispatch, ownProps) {
  return {
    // deleteToDo 액션으로 dispatch하는 함수를 만들어서 return
    // Home에서와 달리 ownProps로 id를 가져올 수 있기 때문에 deleteToDo 실행 시 id를 인자로 전달할 필요가 없다.
    // 애초에 click시 deleteToDo하는 함수를 만들어서 return하여 그대로 onClick 시 사용.
    handleClickDelete: () => dispatch(deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDisptchToProps)(ToDo);

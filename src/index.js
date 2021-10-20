import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const PLUS = "PLUS";
const MINUS = "MINUS";

/**
 * @remarks
 * reducer는 함수이며, 데이터를 수정한다.
 *
 * @returns 수정한 데이터
 */
const countReducer = (count = 0, action) => {
  // action을 전달 받아 어떤 수정을 할지 판단한다.
  switch (action.type) {
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

/**
 * @remarks
 * createStore로 store를 생성한다.
 */
const countStore = createStore(countReducer);

const handleChange = () => {
  number.innerText = countStore.getState();
};

/**
 * @remarks
 * subscribe로 store의 변화를 구독한다. 변화가 일어날 때마다 인자로 전달한 함수가 실행 된다.
 */
countStore.subscribe(handleChange);

/**
 * @remarks
 * 변화를 일으키기 위해 dispatch로 reducer에 action을 전달한다.
 */
const handlePlus = () => {
  countStore.dispatch({ type: PLUS });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);

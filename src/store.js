import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    addToDo: (state, action) => {
      // 1. state를 mutate
      state.push({ text: action.payload, id: Date.now() });
    },
    deleteToDo: (state, action) =>
      // 2. new state를 return
      state.filter((todo) => todo.id !== Number(action.payload)),
  },
});
console.log(toDos);
export const { addToDo, deleteToDo } = toDos.actions; // actions

const store = configureStore({ reducer: toDos.reducer });

export default store;

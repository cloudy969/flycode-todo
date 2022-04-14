import { createStore } from "redux";
import todoReducer from "./reducers/todoReducer";

let store = createStore(todoReducer);

export default store;
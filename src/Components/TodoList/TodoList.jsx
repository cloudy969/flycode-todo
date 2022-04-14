import React, { useEffect } from "react";
import TodoItem from "../TodoItem/TodoItem";
import style from "./TodoList.module.css";

export default function TodoList(props) {

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(props.todos));
  }, [props.todos]);

  return (
    <>
      <form
        className={style.form}
        onSubmit={(e) => {
          e.preventDefault();
          props.addTodo(props.currentText);
        }}>

        <input
          required={true}
          className={style.input}
          placeholder='Введите текст'
          type='text'
          value={props.currentText}
          onChange={(e) => props.updateTodoTitle(e.target.value)} />

        <button className={style.btn} type='submit'>Сохранить</button>
      </form>

      <ul>
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isDone={todo.isDone}
            toggleTodo={props.toggleTodo}
            removeTodo={props.removeTodo}
          />
        ))}
      </ul>
    </>
  );
}

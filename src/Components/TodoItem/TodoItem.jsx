import React from 'react'
import style from './TodoItem.module.css'

export default function TodoItem(props) {

    return (
        <li className={`${style.todoItem} `}>

            <div className={`${style.wrapper} ${props.isDone ? style.wrapperDone : null}`}>

                <div className={`${style.todoTitle} ${props.isDone ? style.done : null}`}>
                    <span> {props.title}  </span>
                </div>

                <div className={style.btnGroup}>

                    <button onClick={() => props.toggleTodo(props.id)}
                        className={`${style.btn} ${style.doneBtn}`}>
                        {props.isDone ? 'Отмена' : 'Готово'}
                    </button>

                    <button onClick={() => props.removeTodo(props.id)}
                        className={`${style.btn} ${style.removeBtn}`}>
                        Удалить
                    </button>
                </div>

            </div>

        </li>

    )
}

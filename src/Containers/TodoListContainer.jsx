import { connect } from 'react-redux'
import TodoList from '../Components/TodoList/TodoList'
import { addTodo, updateTodoTitle, toggleTodo, removeTodo } from '../redux/actions/todoActions'

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        currentText: state.currentTodoTitle,
    }
}

export const TodoListContainer = connect(mapStateToProps, { 
    addTodo, 
    updateTodoTitle, 
    toggleTodo, 
    removeTodo 
})(TodoList);


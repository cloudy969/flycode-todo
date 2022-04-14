
let initialState = {
    todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
    currentTodoTitle: '',
};

const todoReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.length > 0 ? state.todos[state.todos.length - 1]['id'] + 1 : 1,
                        title: action.title,
                        isDone: false,
                    }
                ],
                currentTodoTitle: '',
            }

        case 'UPDATE_TODO_TITLE':
            return {
                ...state,
                currentTodoTitle: action.text
            }

        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.id) {
                        return { ...todo, isDone: !todo.isDone }
                    } else {
                        return todo
                    }
                })
            }

        case 'REMOVE_TODO':
            return {
                ...state,
                todos: [...state.todos].filter(todo => todo.id !== action.id),
            }

        default:
            return state;

    }
}

export default todoReducer;

export const addTodo = title => ({type: 'ADD_TODO', title});

export const updateTodoTitle = text => ({type: 'UPDATE_TODO_TITLE', text});

export  const toggleTodo = id => ({type: 'TOGGLE_TODO', id});

export const removeTodo = id => ({type: 'REMOVE_TODO', id});
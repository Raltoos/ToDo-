import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello World", completed: true, priority: "medium" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
                priority: "medium",
                createdAt: new Date().toISOString()
            }

            const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
            const updatedTasks = [...existingTasks, todo];
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));

            state.todos.push(todo);
        },
        addTodoInit: (state, action) => {
            const todo = {
                id: action.payload.id,
                text: action.payload.text,
                completed: action.payload.completed,
                priority: action.payload.priority,
                createdAt: action.payload.createdAt
            }

            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            
            const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
            const updatedTasks = existingTasks.filter(todo => todo.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        },
        toggleComplete: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
                
                const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
                const updatedTasks = existingTasks.map(task => 
                    task.id === action.payload 
                        ? {...task, completed: !task.completed}
                        : task
                );
                localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            }
        },
        updatePriority: (state, action) => {
            const { id, priority } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.priority = priority;
                
                const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
                const updatedTasks = existingTasks.map(task => 
                    task.id === id 
                        ? {...task, priority}
                        : task
                );
                localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            }
        }
    }
})

export const { addTodo, addTodoInit, removeTodo, toggleComplete, updatePriority } = todoSlice.actions;
export default todoSlice.reducer;
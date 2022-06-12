import React, {useEffect, useState}  from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const initialTodo = [
    {
        id: 1,
        title: 'Todo #1',
        description: 'Description Todo #1',
        completed: false
    },
    {
        id: 2,
        title: 'Todo #2',
        description: 'Description Todo #2',
        completed: true
    }
];

const localTodos = JSON.parse(localStorage.getItem('todos'));

const App = () => {

    const [todos, setTodos] = useState(localTodos || initialTodo);
    const [todoEdit, setTodoEdit] = useState(null);
    
    useEffect(() => {

        localStorage.setItem("todos", JSON.stringify(todos));

    }, [todos])
    

    const todoDelete = (todoId) => {

        if(todoEdit && todoId === todoEdit.id){
            setTodoEdit(null);
        }

        const changedTodos = todos.filter(todo => todo.id !== todoId );
        setTodos(changedTodos);
    }

    const todoToogleCompleted = (todoId) => {
        const changedTodos = todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed} : todo);
        setTodos(changedTodos)
    }

    const todoApp = (todo) => {
        
        const newTodo = {
            id: Date.now(),
            ...todo,
            completed: false
        }
        
        const changedTodos = [
            newTodo,
            ...todos
        ]

        setTodos(changedTodos);
    }

    const todoE = (todo) => {
        setTodoEdit(todo);
    }

    const todoUpdate = (todoUpdate) => {
        console.log(todoUpdate);
        const changedTodos = todos.map((todo) => 
            todo.id === todoUpdate.id ? 
            todoUpdate 
            : todo
        );
        setTodos(changedTodos);
    }

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-4">
                    <TodoForm 
                        todoApp = {todoApp}
                        todoEdit = {todoEdit}
                        todoUpdate = {todoUpdate}
                        todoE = {todoE}
                    />
                </div>
                <div className="col-6">
                    <TodoList 
                        todos= { todos }
                        todoDelete = { todoDelete }
                        todoToogleCompleted = { todoToogleCompleted }
                        todoE = { todoE }
                    />
                </div>
            </div>         
        </div>
    );
}

export default App;
import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, todoDelete, todoToogleCompleted, todoE }) => {

    return(
        <div>
            <h3 className="text-start display-7 ">Lista de que haceres</h3>  

            {   
                todos.length === 0 ? 
                (
                    <div className="alert alert-primary">
                        No hay tareas. Por favor ingresa una
                    </div>
                )
                :
                (
                    todos.map(todo => (
                        <Todo 
                            key={todo.id} 
                            todo ={todo} 
                            todoDelete = {todoDelete}
                            todoToogleCompleted = {todoToogleCompleted}
                            todoE = {todoE}
                        />
                    ))
                )
            }

        </div>
        
    );
}

export default TodoList;
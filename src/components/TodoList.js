import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, todoDelete, todoToogleCompleted, todoE }) => {

    return(
        <div>
            <h3 className="text-start display-7 ">To do list</h3>  

            {   
                todos.length === 0 ? 
                (
                    <div className="alert alert-primary">
                        There are no tasks. Please enter one.
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
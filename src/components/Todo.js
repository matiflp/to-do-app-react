import React from 'react';

const Todo = ({ todo, todoDelete, todoToogleCompleted, todoE }) => {
    return (
        <div className="card mt-2">
                <div className="card-body">
                    <h3 className="card-title text-start">
                        {todo.title}
                        <button 
                            onClick={() => todoToogleCompleted(todo.id)}
                            className={`btn btn-sm ${todo.completed ? 'btn-outline-success' : 'btn-success'} float-end`}
                        >
                            {todo.completed ? 'Terminado' : 'Terminar'}
                        </button>
                    </h3>
                    <p className="card-text text-start">
                        {todo.description}
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <button
                            onClick={() => todoE(todo)}
                            className="btn btn-sm btn-outline-primary me-2"
                        >
                            Editar
                        </button>
                         <button
                             onClick={() => todoDelete(todo.id)}
                            className="btn btn-sm btn-outline-danger"
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
    );
}

export default Todo;
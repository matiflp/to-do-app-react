import React, { useState, useEffect } from "react";

const initialFormValues = {
    title: '',
    description: ''
}

const TodoForm = ({ todoApp, todoEdit, todoUpdate, todoE }) => {

    const [formValues, setFormValues] = useState(initialFormValues);
    const { title, description } = formValues;
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    useEffect(() => {
        if(todoEdit){
            setFormValues(todoEdit);
        }else{
            setFormValues(initialFormValues);
        }
    }, [todoEdit]);

    const handleInputChange = (e) => {
        const changedFormValues = {
            ...formValues,
            [e.target.name] : e.target.value
        }
        setFormValues(changedFormValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(title.trim() === '') {
            setError('Debes indicar un titulo');
            return;
        }

        if(description.trim() === '') {
            setError('Debes indicar una descripción');
            return;
        }

        if(todoEdit) {
            todoUpdate(formValues);
            // Establezco el mensaje de existo
            setSuccessMessage('Item actualizado con éxito');
        }
        else{
            todoApp(formValues);
            // Establezco el mensaje de existo
            setSuccessMessage('Item agregado con éxito');
            // Reinicio el formulario
            setFormValues(initialFormValues);
        }

        // Oculto el mensaje de exito a los dos segundos
        setTimeout((() => setSuccessMessage(null)), 2000);

        // Reinicio el mensaje de error
        setError(null);
    }

    return(
        <div>
            <h3 className="text-start display-7">{todoEdit ? 'Editar Tarea' : 'Nueva Tarea'}</h3>

            {
                todoEdit &&
                <button
                    onClick={() => todoE(null)} 
                    className="btn btn-sm btn-warning mb-2"
                >
                    Cancelar edición
                </button>
            }


            <form onSubmit={handleSubmit}>

                <input 
                    type='text' 
                    placeholder='Titulo' 
                    className='form-control'
                    value={title}
                    name="title"
                    onChange={handleInputChange}
                />

                <textarea 
                    placeholder="Descripción" 
                    className="form-control mt-2"
                    value={description}
                    name="description"
                    onChange={handleInputChange}
                ></textarea>

                <button 
                    className="btn btn-primary btn-block mt-2"
                >
                    {todoEdit ? 'Editar Tarea' : 'Nueva Tarea'}
                </button>
            </form>

            {
                error &&
                (
                    <div className="alert alert-danger mt-2">
                        { error }
                    </div>
                )
            }
            {
                successMessage && 
                (
                    <div className="alert alert-success mt-2"> 
                        { successMessage }
                    </div>
                )
            }
            
        </div>
        
    );
}

export default TodoForm;
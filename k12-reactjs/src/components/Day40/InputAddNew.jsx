import React, { useState, useCallback } from 'react'
import './InputAddNew.css'

const InputAddNew = (props) => {
    const [toDo, setToDo] = useState({
        name: '',
    });

    const handleOnchangeInput = useCallback(event => {
        const { name, value } = event.target;
        setToDo({ ...toDo, [name] : value });
    }, [toDo]);

    const handleSaveToDo = () => {
        if (toDo.name !== '') {
            props.handleSave(toDo);
        }
    }

    return (
        <>
            <div className="input-add-new">
                <input type="text"
                    id="input-add"
                    name="name"
                    onChange={ event => handleOnchangeInput(event) }
                />
                <button onClick={ handleSaveToDo }>+</button>
            </div>
        </>
    )
}

export default InputAddNew
import React, { useState, useCallback } from 'react'
import './_modal.scss'

const Modal = (props) => {
    const [student, setStudent] = useState(props.student)

    const handleOnchangeInput = useCallback(event => {
        const { name, value } = event.target;
        setStudent({ ...student, [name] : value });
    });

    const handleSubmit = () => {
        console.log(props.student.id, student);
        props.onSubmit(props.student.id, student);
    }

    return (
        <>
            {/* <button id="myBtn">Open Modal</button> */}
            <div id="myModal" className={ props.isOpen ? 'modal active' : 'modal' } >
                <div className="modal-content">
                    <span className="close" onClick={ props.closeModal }>&times;</span>
                    
                    <label htmlFor="fname">Name:</label><br />
                    <input type="text"
                        id="fname"
                        name="name"
                        value={ student.name ?? props.student.name }
                        onChange={ (e) => handleOnchangeInput(e) }
                        /><br />

                    <label htmlFor="lname">Age:</label><br />
                    <input type="number"
                        id="lname"
                        name="age"
                        value={ student.age ?? props.student.age }
                        onChange={ (e) => handleOnchangeInput(e) }
                        /><br /><br />

                    <label htmlFor="lname">Gender:</label><br />
                    <input type="text"
                        id="lname"
                        name="gender"
                        value={ student.gender ?? props.student.gender }
                        onChange={ (e) => handleOnchangeInput(e) }
                        /><br /><br />

                    <button onClick={ handleSubmit }>Cập nhật</button>
                    {/* <button onclick="handleSubmit()"></button> */}
                </div>
            </div>
        </>
    )
}

export default Modal
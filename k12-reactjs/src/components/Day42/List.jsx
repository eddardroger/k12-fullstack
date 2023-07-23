import React, { useState } from 'react'
import Modal from './Modal/Modal'

const List = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedStudent, setSelectedStudent] = useState({});

    const handleEditStudent = (student) => {
        setIsOpen(true)
        setSelectedStudent(student)
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const updateStudent = (id,  newStudent) => {
        props.updateStudent(id, newStudent)
    }

  return (
    <>
        <Modal isOpen={ isOpen }
            closeModal={ handleCloseModal }
            student={ selectedStudent }
            onSubmit={ updateStudent }
         />
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
            </tr>
            { props.students && props.students.map(item => {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.gender}</td>
                        <td>
                            <button onClick={ () => handleEditStudent(item) }>
                                Edit
                            </button>
                        </td>
                        <td>
                            <button onClick={ () => props.deleteStudent(item.id) }>
                                Remove
                            </button>
                        </td>
                    </tr>
                )
            })}
        </table>
    </>
  )
}

export default List
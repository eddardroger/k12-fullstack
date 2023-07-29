import React, { useState, useEffect } from 'react'
import Modal from './Modal/Modal'

const List = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState({});
    const [listStudent, setListStudent] = useState();

    useEffect(() => {
        console.log(listStudent);
        setListStudent(props.students);
    }, [listStudent]);

    const handleEditStudent = (student) => {
        setIsOpen(true)
        setSelectedStudent(student)
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const updateStudent = (id,  newStudent) => {
        setIsOpen(false);
        props.updateStudent(id, newStudent)
    }

    const handleSortAscending = () => {
        // points.sort(function(a, b){return a-b});
        // console.log(props.students.age);
        console.log(listStudent);
        setListStudent(listStudent.sort((a, b) => a.age - b.age));
        console.log(listStudent);
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
                <th></th>
                <th></th>
                <th>
                    <button onClick={ handleSortAscending }>Sort tăng dần</button>
                    <button>Sort giảm dần</button>
                </th>
                <th></th>
            </tr>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
            </tr>
            { listStudent && listStudent.map(item => {
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
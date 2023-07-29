import React, {  useState } from 'react'
import './_app.scss';
import data from './data.json';
import List from './components/Day42/List';
//data = API trả về (Application Programming Interface: là dữ liệu do backend trả về.
// Front end sẽ phải đọc và đổ data ra màn hình)
const App = () => {
    const [students, setStudents] = useState(data)
    const [number, setNumber] = useState(0)

    const deleteStudent = (id) => {
        setStudents(students.filter(student => student.id !== id))
    }

    const updateStudent = (id, newStudent) => {
        console.log(id, newStudent);
        setStudents(students.map(student => {
            if(student.id === id){
                return {
                    ...student, //rest of student
                    name: newStudent.name,
                    age: newStudent.age,
                    gender: newStudent.gender,
                }
            }
            return student
        }))
    }

    const handleSortAscending = () => {
        // points.sort(function(a, b){return a-b});
        // console.log(props.students.age);
        students.sort((a, b) => a.age - b.age);
        setStudents(students);
        console.log(students);
    }

    const increase = () => {
        setNumber(number + 1)
    }
  return (
    <>
        <h2>HTML Table</h2>
        {number}
        <button onClick={increase}>+</button>
        {/* <List students={ students }
            deleteStudent={ deleteStudent }
            updateStudent={ updateStudent }    
        /> */}
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
            { students && students.map(item => {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.gender}</td>
                        {/* <td>
                            <button onClick={ () => handleEditStudent(item) }>
                                Edit
                            </button>
                        </td>
                        <td>
                            <button onClick={ () => props.deleteStudent(item.id) }>
                                Remove
                            </button>
                        </td> */}
                    </tr>
                )
            })}
        </table>
    </>
  )
}

export default App
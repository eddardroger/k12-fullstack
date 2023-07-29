import React, {  useState } from 'react'
import './_app.scss';
import data from './data.json';
import List from './components/Day42/List';
//data = API trả về (Application Programming Interface: là dữ liệu do backend trả về.
// Front end sẽ phải đọc và đổ data ra màn hình)
const App = () => {
    const [students, setStudents] = useState(data)

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

  return (
    <>
        <h2>HTML Table</h2>
        <List students={ students }
            deleteStudent={ deleteStudent }
            updateStudent={ updateStudent }    
        />

        {/* BEM: Block__Element--Modifier
         */}
        {/* <div id="root">
            <div className="content">
                <div className="content__header">
                    <div className="content__header--image">

                    </div>
                    <span>Title</span>
                </div>
                <div className="content__body">
                    <img src="" alt="" />
                </div>
                <div className="content__footer">
                    <span>Footer</span>
                </div>
            </div>
        </div> */}
    </>
  )
}

export default App
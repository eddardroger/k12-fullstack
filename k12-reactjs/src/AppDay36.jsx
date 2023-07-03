// rafce: để hiển thị gợi ý tạo cấu trúc component
import React, { useState } from "react"; //useState là 1 hooks
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => {
    //state: là 1 vùng nhớ dùng để lưu trữ các biến của component
    //props: là 1 vùng nhớ dùng để truyền giữa các components
    // const person = {    //Cách khai báo biến thông thường
    //     name: 'Duck',
    //     gender: 'male'
    // }

    const [person, setPerson] = useState({  //Cách để báo 1 state bằng hook useState
        name: 'Duck',
        gender: 'male'
    });

    return ( //Cú pháp XML
        <>
            { person.name }
            <Header person={ person }/>
            <Body per={ person }/>
            <Footer abc={ person }/>
        </>
    );
};

export default App;

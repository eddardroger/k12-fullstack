import React from 'react';

class App extends React.Component { //Lớp: có tính hướng đối tượng
    constructor() {     //Hàm khởi tạo. Tạo ra các giá trị ban đầu cho class
        super();    //Túi đựng (có thể đựng props)
        this.state = {  //state được coi là 1 vùng nhớ. Dùng để lưu trữ các biến trong phạm vi component
            color: "red",
            person: {
                name: "Duck",
                age: "18",
                gender: "male"
            }
        };
    }

    componentWillMount() {} //Mounting: Gán component
    componentDidMount() {} //Mounting: Gán component
    
    componentWillReceiveProps() {} //Updation: Cập nhật component
    shouldComponentUpdate() {} //Updation
    componentWillUpdate() {} //Updation

    componentWillUnmount() {} //Unmounting: Huỷ component


    //Con trỏ this dùng để chỉ điểm tới cái component hiện tại
    //Dấu . dùng để trỏ đến thuộc tính của đối tượng
    render() {
        return <h2>I am a {this.state.color} {this.state.person.name}!</h2>;
    }
}

export default App;
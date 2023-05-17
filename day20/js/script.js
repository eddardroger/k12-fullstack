function onChangeEmail() {
    let email = document.getElementById('email').value; //Lấy giá trị của ô input có id là email
    console.log(email);

    return email;
}

function onChangeUserName() {
    let userName = document.getElementById('username').value;
    console.log(userName);

    return userName;
}

function handleSubmit() {
    let email = onChangeEmail();
    let userName = onChangeUserName();
    //str.length: đếm số ký tự của chuỗi
    //str.split: phân tách chuỗi
    //str.toUpperCase: viết hoa tất cả các ký tự
    //str.toLowerCase: viết thường tất cả các ký tự
    //str.trim: bỏ khoảng trắng ở đầu và cuối
    //str.includes: check ký tự có tồn tại trong chuỗi hay không

    if (email.length > 0) {
        document.getElementById('email-value').innerHTML = '<h1>Email vừa nhập là: ' + email.trim() + '</h1>';
    }
    if (userName.length > 0) {
        document.getElementById('username-value').innerHTML = '<h1>Tên vừa nhập là: ' + userName.trim() + '</h1>';
    }
}

function handleRemove() {
    document.getElementById('email-value').innerHTML = '';
    document.getElementById('username-value').innerHTML = '';
    document.getElementById('email').value = '';
}
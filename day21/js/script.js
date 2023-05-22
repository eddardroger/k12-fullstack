var isOpen = false; //Mặc định ban đầu
var number1 = '';
var number2 = '';
var operator = '';

function toggle() {
    isOpen = ! isOpen; //Cập nhật lại giá trị
    if (isOpen) { //check isOpen === true
        document.getElementById('result').value = 'Đã bật máy tính';
    } else {
        document.getElementById('result').value = '';
    }
}

function changeInput(number) {
    if (isOpen) {
        if (operator === '') {
            number1 += number;
            document.getElementById('result').value = number1;
            console.log(number1);
        } else {
            number2 += number;
            console.log(number2);
            document.getElementById('result').value = number1 + operator + number2;
        }
    }
    //máy tắt
}

function selectOperator(op) {
    operator = op;
    console.log(op);
    document.getElementById('result').value = number1 + operator;
}

function handleResult() {
    if (number1 !== '' && number2 !== '' && operator !== '') {
        if (operator === '+') {
            document.getElementById('result').value = parseInt(number1) + parseInt(number2);
        } else if (operator === '-') {
            document.getElementById('result').value = parseInt(number1) - parseInt(number2);
        } else if (operator === '*') {
            document.getElementById('result').value = parseInt(number1) * parseInt(number2);
        } else if (operator === '/') {
            if (parseInt(number2) !== 0) {
                document.getElementById('result').value = parseInt(number1) / parseInt(number2);
            }
        }
    }
}
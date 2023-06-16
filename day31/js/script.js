// 1. Khai báo biến
// 2. Câu điều kiện If else
// 3. Vòng lặp for


// 4. Kiểu dữ liệu
//Các kiểu dữ liệu
// - Number (kiểu số)
// - string (chuỗi ký tự)
// - Array (mảng)
// - object (đối tượng) 
// - Boolean (Kiểu đúng : sai | true : false | 1 : 0)
// - undefined (Kiểu dữ liệu lỗi: chưa được định nghĩa)
// - Null (Là kiểu dữ liệu rỗng)
// - NaN (Not a number)

// 5. Operator (Toán tử)
// Các kiểu operator:
// !== (Khác. Ví dụ so sánh a !== b)
// = (Phép gán giá trị VD: a = 5)
// == (So sánh 2 giá trị. VD: a = 5, b = '5', a == b return true)
// === (So sánh 2 giá trị và kiểu dữ liệu của nó. a === b return false)
// % (phép chia hết. VD: a % 2 == 0)
// && (Toán tử logic "VÀ" AND. VD: condition = (a === b && b === c))
// || (Toán tử logic "HOẶC" OR. VD: condition = (a === b || b === c))
// >=, <=, >, < (Toán tử so sánh thông thường)
// += (Toán tử cộng rút gọn. VD: a += b tương đương a = a + b)
// -=, *=, /= (rút gọn. VD: a -= b tương đương a = a - b, a *= b tương đương a = a * b,...)
// ++ (Tăng 1 đơn vị. VD: a++ tương đương a + 1)
// -- (Giảm 1 đơn vị. VD: a-- tương đương a - 1)
// ** (Phép tính mũ. VD: a ** b tương đương a ^ b)

// ------
// Toán tử 3 ngôi
// var a = 10;
// var b = 5;
// var sum = (a > b) ? (a + b) : (a - b)   //(condition ? return_value_1 : return_value_2)
// ------

// 6. Function:
// Là 1 hàm dùng để định nghĩa 1 loạt hành động

var a = 1;
var b = 2;
var c = 3;
var d = 4;

// sum a + b; sum b + c; sum c + d; sum d + a

// function tenFunction (parameter_1, parameter_2, ....) {
//     statement
// }

// Có 2 kiểu function:
// + Kiểu 1: Function chỉ thực thi, không trả về kết quả

function inChuRaManHinh() {
    document.getElementById('text-1').innerHTML = 'Hello World';
    document.getElementById('text-2').innerHTML = 'Hello World';
}

inChuRaManHinh();

// + Kiểu 2: Function thực thi và trả về kết quả:

function sum (param1, param2) {
    let sum = param1 + param2;
    return sum
}

var result = sum(a, b); //param1 = a, param2 = b. => result = sum
sum(b, c); //param1 = b, param2 = c
sum(c, d); //param1 = c, param2 = d
sum(d, a); //param1 = d, param2 = a

// BTVN: 
// - Nhập vào độ dài 3 cạnh của 1 tam giác. 
// Viết function kiểm tra 3 độ dài có phải là độ dài của 1 tam giác hay không? 
// Nếu là tam giác thì đó là tam giác gì?
// (Điều kiện: 
//     Để nó là 3 độ dài của 3 cạnh tam giác thì a + b > c, b + c > a, a + c > b
//     Để là 1 tam giác cân: Nó phải là tam giác và phải có 2 cạnh bằng nhau
//     Để là tam giác đều: 3 cạnh bằng nhau
//     Là tam giác vuông: a^2 + b^2 = c^2
//     )
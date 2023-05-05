// * Lưu ý: nếu code ở file js mà lỗi => toàn bộ phần code đọc sau sẽ bị lỗi 
//Khai báo biến
// Có 3 kiểu khai báo biến chính ở trong js (var, let, const) hoisting
var number1 = 1; //là kiểu khai báo biến thông dụng nhất. Phạm vi: Global
let number2 = 2; //cũng là kiểu khai báo biến. Phạm vi: in scope
const number3 = 3; //Khai báo kiểu constant (hằng số)

//Các kiểu dữ liệu string, number, bool, array, object, null, undefined, NaN(Not a Number)
//Functional 
//Hướng đối tượng: Class
var string = "Hello World"; //Khai báo chuỗi
var number = 1000; //Khai báo kiểu số
var bool = true; //boolean có kiểu true hoặc false
var array = [1, 2, 3, 4, 5, 6]; //ma trận 1 chiều gồm n phần tử
var array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8], 
    [9, 10, 11, 12] 
];  //1 mảng lớn gồm 3 phần tử con, mỗi phần tử con gồm 4 phần tử cháu

//array = [index: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ...];
var arrayString = ['red', 'green', 'blue'];
var greenColor = arrayString[1]; //undefined index
console.log(greenColor);

var number = '10000.5'
var number5 = parseFloat(number);  //parseInt: ép kiểu số nguyên, parseFloat: ép kiểu số thực
console.log(number);

//Cách khai báo biến: cú pháp (var/let/const + tên biến + dấu bằng + giá trị)
var number = 1;

//Cách đặt tên biến
//Quy tắc 1: camelCase (viếtThườngChữĐầu, viếtHoaChữCáiĐầuỞCụmCâu) thường dùng để đặt tên biến và tên các function
//Quy tắc 2: snake_case (các_cụm_từ_được_cách_nhau_bằng_dấu _) thường dùng để đặt tên biến
//Quy tắc 3: UPPERCASE (VIẾTHOATẤTCẢ) thường dùng để định nghĩa các constant
//Quy tắc 4: lowercase (viếtthườngtấtcả) 
//Quy tắc 5: CapitalCase (ViếtHoaCácChữCáiĐầu) thường dùng để đặt tên các tên file hoặc tên class

//Toán tử: + - * / ++ -- ** = %
var a = 2;
var b = 3;
var sum = a + b;
var subtract = a - b;
var multiple = a * b;
var divide = a / b;
var string = 'Đây là số: ';
console.log('Tổng của a + b là: ' + sum);
console.log('Hiệu của a - b là: ' + subtract);
console.log('Tích của a * b là: ' + multiple);
console.log('Thương của a / b là: ' + divide);
console.log(string + a);  //Nối chuỗi

a = 10;
sum = a + b;
console.log('Tổng của a + b là: ' + sum); //Kết quả 13

sum = sum + a; //tương đương sum = 13 + 10
sum = sum + sum;
console.log(sum);
sum += sum; //tương đương sum = sum + sum
sum += a; //tương đương sum = sum + a
sum++; //Sẽ được cộng sau
++sum; //Cộng trước
console.log(a ** b); //luỹ thừa a^b

console.log(a % b); //Phép chia lấy dư

//Các toán tử so sánh: <, >, <=, >=, ==, ===
console.log(a >= b);
console.log(a < b);
console.log(a <= b);
console.log(a == b);
var c = 1;
var d = '1';
console.log(c == d);
console.log(a === b); //So sánh cả kiểu dữ liệu

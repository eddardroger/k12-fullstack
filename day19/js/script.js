// var: khai báo variable (biến) toàn cục 
// let: khai báo variable (biến) cục bộ
// const: khai báo hằng (những thành phần không thay đổi || không bị ghi đè)

// var a = 5; //Không cần khai báo kiểu dữ liệu (integer, float, double, string, boolean, array,...)
// var b = 6; //Các ngôn ngữ khác cần phải khai báo kiểu dữ liệu
// var sum = 0;
// if (a <= b) { // condition === true => statement được thực thi
//     //statement
//     sum = a + b;
// }

// if (a >= b) { //condition === false => statementElse được thực thi. statementIf bị bỏ qua (ignore)
//     //statementIf
//     sum = a - b;
// } else {
//     //statementElse
//     sum = b - a;
// }

// if (a > b) { //false
//     //statementIf
//     sum = a + b;
// } else if (a === b) { //false
//     //statementElseIf
//     sum = a * b;
// } else { // => true
//     //statementElse
//     sum = a / b;
// }

// for (let i = 0; i <= 10; i++) {
//     //statement
//     sum += i;
// }

//Lần lặp 1: i = 0; 0 <= 10 (true); statement thực hiện: sum = sum + i (sum = 0 + 0); i++ => i = 0 + 1
//Lần lặp 2: i = 1; 1 <= 10 (true); statement thực hiện: sum = sum + i (sum = 0 + 1); i++ => i = 1 + 1
//Lần lặp 11: i = 10; 10 <= 10 (true); statement thực hiện: sum = sum + i (sum = previousSum + 10); i++ => i = 10 + 1
//Lần lặp 12: i = 11; 11 <= 10 (false); statement không được thực hiện => kết thúc vòng lặp


//function thực thi
// function tinhTong(a, b) { //parameters: các biến đầu vào || các biến tham chiếu
//     let sum = a + b;
//     console.log('Tổng của 2 số ' + a + ' và ' + b + ' là: ' + sum);
// }

// tinhTong(1, 2);

//function trả về kết quả
function tinhTich(a, b) {
    let sum = a * b;

    // return sum; //return 6;
    return sum; //return 6; //return dừng chương trình
}
tinhTich(2, 3);
console.log('Tich phep nhan: ' + tinhTich(2, 3));
console.log('Tich phep nhan: ' + tinhTich(4, 5));
console.log('Tich phep nhan: ' + tinhTich(6, 7));


//Lý do phải viết function:
//1. Tái sự dụng (re-use)
//2. Code ngắn lại
//3. Tránh việc trùng biến
//4. Đọc code dễ hiểu
//5. Giảm tải tốc độ đọc (Function chỉ chạy khi được gọi)

//Function được gọi thông qua events (onclick, onchange, onPageLoad, onKeychange,..., )
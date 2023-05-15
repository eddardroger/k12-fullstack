

// for (let a = 0; a < 10; a++) {
//     console.log(a);
// }
//Lần 1: a = 0; 0 < 10 => log(0); a++ => 0+1
//Lần 2: a = 1; 1 < 10 => log(1); a++ => 1+1
//Lần 3: a = 2; 2 < 10 => log(2); a++ => 2+1
//...
//lần 9: a = 8; 8 < 10 => log(8); a++ => 8+1
//lần 10: a = 9; 9 < 10 => log(9); a++ => 9+1
//Lần 11: a = 10; 10 = 10 => false

//Ví dụ 1: nhập vào số a bất kỳ. In ra tất cả các số từ 0 -> a

// var a = parseInt(prompt('Nhap vao so a'));

// for (let i = 0; i < a; i++) {
//     console.log(i);
// }

// Ví dụ 2: nhập vào số a bất kỳ. In ra các số chẵn lớn hơn 0 và bé hơn a
// var a = parseInt(prompt('Nhap vao so a'));
//i = 3; i < a => true; 3 % 2 != 0 => không làm gì cả; i++ => 3 + 1

for (let i = 0; i < a && i % 2 ===0; i++) { 
    if (i % 2 === 0) {
        console.log(i);
    }
}
// var a = 1;
// var b = 2;
// var c = 3;
// console.log(a + " X " + b + " = " + c);
//BTVN:
//Câu 1: In ra các số từ 1-1000 theo thứ tự tăng dần
//Câu 2: In ra các số từ 1-1000 theo thứ tự giảm dần
//Câu 3: Nhập vào 1 số bất kỳ > 0. In ra bảng cửu chương của số đó

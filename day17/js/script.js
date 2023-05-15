let a = parseInt(prompt('Nhap vao so a'));
let sum = 0;

if (a > 0) {
    for (let i = 0; i <= a; i++) {
        if (i % 2 !== 0) {
            console.log(i);
            sum += i; //i lẻ: sum = sum + i;
        }
    }
    console.log('Tổng các số lẻ bé hơn hoặc = ' + a + ' là: ' + sum);
} else {
    console.log('Số ' + a + ' không hợp lệ.');
}
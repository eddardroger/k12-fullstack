//1. String length: Đếm số ký tự
function countLength (string) {
    console.log(string.length);
}

//2. String slice: cắt chuỗi
function sliceString(string) {
    console.log(string.slice(3, 5)); //param1: index; param2: index
}

//3. Sub string: cắt chuỗi
function subString(string) {
    console.log(string.substring(3, 5)); //param1: index; param2: index
}

//4. Sub str: cắt chuỗi
function subStr(string) {
    console.log(string.substr(6, 5)); //param1: index của ký tự; param2: số ký tự cần lấy
}

//5. String replace: Thay thế string đầu tiên tìm được bằng 1 string khác
function replaceString(string) {
    console.log(string.replace('world', 'Duck')); //param1: chuỗi string cần thay thế; param2: chuỗi thay thế
}

//6. String replace all: Thay thế toàn bộ các string tìm được
function replaceAllString(string) {
    console.log(string.replaceAll('world', 'Duck'));
}

//7. To upper case: Biến đổi string từ viết thường thành in hoa
function stringToUpperCase(string) {
    console.log(string.toUpperCase());
}

//8. To lower case: Ngược lại của upper case
function stringToLowerCase(string) {
    console.log(string.toLowerCase());
}

//9. Concat string: cộng string
function stringConcat(string) {
    let string2 = 'Javascript';
    console.log(string.concat(' test ', string2));
}

//10. trim: loại bỏ khoảng trống ở đầu và cuối string
function trimString(str) {
    console.log(str.trim());
}

//11. trimStart: tương tự trim nhưng chỉ bỏ khoảng trống ở đầu string
//12. trimEnd: tương tự trim nhưng chỉ bỏ khoảng trống ở cuối string
//13. charAt: trả về ký tự ở 1 vị trí nhất định
function stringCharAt(str) {
    console.log(str.charAt(0));  //param: index
}

//14. split string: chia tách chuỗi thành 1 mảng các phần tử
function splitString(str) {
    console.log(str.split(','));
}

var str = 'Hello, world, javascript, php, python, java!';
countLength(str);
sliceString(str);
subString(str);
subStr(str);
replaceString(str);
replaceAllString(str);
stringToUpperCase(str);
stringToLowerCase(str);
stringConcat(str);
trimString(str);
stringCharAt(str);
splitString(str);
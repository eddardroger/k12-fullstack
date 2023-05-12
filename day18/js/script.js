//Câu 7
let a = parseFloat(prompt('Nhap vao a'));
let b = parseFloat(prompt('Nhap vao b'));
let c = parseFloat(prompt('Nhap vao c'));

if (a === 0) {
    if (b === 0) {
        if (c === 0) { // a === b === c === 0
            console.log('Phương trình vô số nghiệm!');
        } else { // a === b === 0 !== c 
            console.log('Phuơng trình vô nghiệm');
        }
    } else { // a === 0; b !== 0
        console.log('Phương trình có nghiệm duy nhất là: ' + (-c / b));
    }
} else {
    let delta = (b ** 2) - (4 * a * c);
    if (delta < 0) {
        console.log('Phương trình có nghiệm ảo.');
    } else if (delta === 0) {
        let x = (-b) / (2 * a);
        console.log('Phương trình có nghiệm kép: ' + x);
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log('Phương trình có nghiệm x1: ' + x1 + ' và x2: ' + x2);
    }
}

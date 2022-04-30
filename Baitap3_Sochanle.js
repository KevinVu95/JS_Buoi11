
// BÀI 3: Hàm này được gắn vào nút button
//  Input: 
//  1. Tạo và lấy giá trị biến khi người dùng nhập 3 số nguyên
//  2. Tạo biến countEven là biến đếm số chẵn và gán giá trị = 0
//  3. Tạo biến countOdd là biến đếm số lẻ và = 3 - số lượng số chẵn
// Process(Pseudo code)
// Lần lượt chia 3 số cho 2, nếu phần dư = 0 là đúng thì +1 vào countEven
// Output: Nhấn button sẽ hiện countEven và countOdd

function myFunction3(){
    var number1 = +document.getElementById("num1").value;
    var number2 = +document.getElementById("num2").value;
    var number3 = +document.getElementById("num3").value;

var countEven = 0;

if (number1 % 2 === 0){
    countEven+= 1
};
if (number2 % 2 === 0){
    countEven+= 1
};
if (number3 % 2 === 0){
    countEven+= 1
};
document.getElementById("thirdResult").style.display = 'block';
document.getElementById("even").innerHTML = `Có tổng cộng ${countEven} số chẵn`;
var countOdd = 3 - countEven;
    document.getElementById("odd").innerHTML = `Có tổng cộng ${countOdd} số lẻ`;
}
// BÀI 4: Hàm này được gắn vào nút button
//  Input: Tạo và lấy giá trị biến khi người dùng nhập 3 số
// Process(Pseudo code)
// 1. Nếu a = b và b = c => tam giác đều
// 2. Nếu a = b hoặc b = c hoặc c = a => tam giác cân
// 3. Nếu a^2 + b^2 = c^2 hoặc b^2 = c^2 + a^2 hoặc a^2 = b^2 + c^2 => tam giác vuông
// 4. Nếu k phải 3 loại trên, thì là loại khác
// Output: Loại tam giác

function myFunction4(){
    var number1 = document.getElementById("canhA").value
    var number2 = document.getElementById("canhB").value
    var number3 = document.getElementById("canhC").value

if (number1 === number2 && number2 === number3){
    document.getElementById("triangle").innerHTML = "Tam giác đều"
}
else if (number1 === number2 || number2 === number3 || number1 === number3){
    document.getElementById("triangle").innerHTML = "Tam giác cân"
}
else if (number1 * number1 === number2 * number2 + number3 * number3||
         number2 * number2 === number3 * number3 + number1 * number1||
         number3 * number3 === number2 * number2 + number1 * number1){
    document.getElementById("triangle").innerHTML = "Tam giác vuông"
}else{
    document.getElementById("triangle").innerHTML = "Orther"
}
    document.getElementById("fourResult").style.display = 'block';
}
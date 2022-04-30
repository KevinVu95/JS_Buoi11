// BÀI 1: Hàm này được gắn vào nút button
//  Input: Tạo và lấy giá trị biến khi người dùng nhập 3 số nguyên
// Process:
// 1. Vì chỉ có 3 số nên giá trị tăng dần sẽ là var min, mid và max
// 2. So sánh lần lượt để tìm ra số min và max
// 3. Số mid = tổng 3 số - số min - số max
// Output: Thứ tự từ trái qua phải là min, mid, max

function myFunction(){
    var number1 = +document.getElementById("num1").value;
    var number2 = +document.getElementById("num2").value;
    var number3 = +document.getElementById("num3").value;

    var min = number1 < number2 ? number1: number2;
    var max = number1 > number2 ? number1 : number2;
    min = min < number3 ? min : number3;
    max = max > number3 ? max : number3;
    var mid = number1 + number2 + number3 - min - max;

    document.getElementById("firstResult").style.display = 'block';
    document.getElementById("order").innerHTML =` ${min} ${mid} ${max}`

}

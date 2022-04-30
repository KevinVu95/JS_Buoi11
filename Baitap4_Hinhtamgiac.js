// Pseudocode

// Input: Tạo var 3 cạnh, var kết quả

// Process: 
// B1: Tạo var giá trị 3 cạnh
// B2: Xét giá trị 3 cạnh A, B, C suy ra giá trị tam giác
// B3: Xuất giá trị theo hàm đã định

// Output: 3 cạnh bằng nhau => tam giác đều, Cạnh huyền bình phương = tổng bình phương 2 cạnh góc vuông => tam giác vuông, 2 cạnh bên bằng nhau => tam giác cân


var firstValue = document.getElementById (canhA) ; 
var secondValue = document.getElementById (canhB); 
var thirdValue = document.getElementById (canhC) ; 
var result;

function resultEl(){
    document.getElementById("result").innerHTML =
    firstValue === secondValue || firstValue === thirdValue || secondValue === thirdValue ? "Tam giác cân" : firstValue === secondValue === thirdValue ? "Tam giác đều" : "Tam giác vuông" 
};

console.log(result);
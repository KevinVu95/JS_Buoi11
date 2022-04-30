// BÀI 2: Hàm này được gắn vào nút button
// Input: Tạo biến WhoIsThere và lấy giá trị khi người dùng chọn Bố hoặc Mẹ hoặc Anh trai hoặc Em gái
// Process(Pseudo code)
// 1. Cho hiện result2 khi nhấn vào button
// 2. Chèn vào greeting dòng Xin chào + giá trị biến WhoIsThere
// Output: Nhấn button sẽ hiện Xin chào + giá trị biến WhoIsThere

function myFunction2(){
    var whoIsThere = document.getElementById("whoRU").value
    document.getElementById("secondResult").style.display = 'block';
    document.getElementById("helloThere").innerHTML = `Xin chào ${whoIsThere}`
}




let a = parseFloat(prompt("Nhập điểm kiểm tra"))
let b = parseFloat(prompt("Nhập điểm giữa kỳ"))
let c = parseFloat(prompt("Nhập điểm cuối kỳ"))
// làm tròn số thực hàng thập phân có 1 chữ số
if (parseFloat((a+b+c)/3).toFixed(1) >= 8.0){
    alert("Học lực giỏi")}
    else if (parseFloat((a+b+c)/3).toFixed(2) >= 6.5){
        alert("Học lực khá")}
        else if (parseFloat((a+b+c)/3).toFixed(2) >= 3.5){
            alert("Học lực trung bình")}
            else
                alert("Học lực yếu")



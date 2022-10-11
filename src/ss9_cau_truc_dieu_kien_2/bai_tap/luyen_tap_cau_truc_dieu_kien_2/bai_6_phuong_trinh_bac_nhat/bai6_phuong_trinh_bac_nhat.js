let a = prompt("Nhập giá trị a của phương trình bậc nhất ax + b = 0")
let b = prompt("Nhập giá trị b của phương trình bậc nhất ax + b = 0")
if (isNaN(a)||isNaN(b)) {
    alert("Dữ liệu không hợp lệ")
}
else if (a == 0 && b == 0){
    alert("Phương trình vô số nghiệm")

}
else if (a != 0 && b == 0){
    alert("Phương trình có nghiệm x = 0")

}
else if (a == 0 && b != 0){
    alert("Phương trình vô nghiệm")

}
else {
    alert("Phương trình có nghiệm x = " + (-b/a))

}

let tien = prompt("Nhập số tiền gửi (VNĐ) : ")
let thoiGian = prompt("Nhập thời gian gửi (năm) : ")
let laiXuat = prompt("Nhập lãi xuất hằng năm (%) :")
let laiKep = parseFloat( tien*(Math.pow((1 + (laiXuat/100)),thoiGian)) - tien)
alert("Lãi kép sau " + thoiGian + " năm là: "+laiKep +" VNĐ")

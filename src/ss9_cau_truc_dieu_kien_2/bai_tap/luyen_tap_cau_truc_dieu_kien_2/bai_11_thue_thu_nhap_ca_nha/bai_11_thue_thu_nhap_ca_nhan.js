let luong = +prompt("Nhập lương của bạn (VNĐ): ")
if( luong > 15000000){
    alert("Thuế thu nhập cá nhân cần nộp là: " + (luong*30/100) + " VNĐ")}
    else if( luong > 7000000){
    alert("Thuế thu nhập cá nhân cần nộp là: " + (luong*20/100) + " VNĐ")}
    else
    alert("Thuế thu nhập cá nhân cần nộp là: " + (luong*10/100 + " VNĐ"))

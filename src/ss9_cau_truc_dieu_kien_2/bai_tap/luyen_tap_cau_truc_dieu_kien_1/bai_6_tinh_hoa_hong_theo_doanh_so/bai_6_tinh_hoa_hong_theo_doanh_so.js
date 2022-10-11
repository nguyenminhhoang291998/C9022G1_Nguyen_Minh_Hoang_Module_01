let a = parseInt(prompt("Nhập doanh số tháng này (VNĐ): "))

if (a >= 300000000){
    alert("Tiền hoa hồng tháng này là: " + a*20/100 + " VNĐ")}
    else if (a >= 200000000){
         alert("Tiền hoa hồng tháng này là: "+ a*10/100 + " VNĐ")}
        else if (a >= 100000000){
             alert("Tiền hoa hồng tháng này là: "+ a*5/100 + " VNĐ")}
            else
                alert("Tháng này chưa đạt doanh số")

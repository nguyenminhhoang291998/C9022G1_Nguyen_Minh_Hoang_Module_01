let a = parseInt(prompt("Nhập thời lượng sử dụng điện thoại (phút):"))

if(a > 200){
    alert("Tiền cước tháng này là: "+ ((a-200)*200 + 150*400 + 600*50 + 25000) + " VND" )}
    else if(a > 50){
        alert("Tiền cước tháng này là: "+ ((a-50)*400 + 600*50 + 25000) + " VND" )}
            else
            alert("Tiền cước tháng này là: "+ ((a-50)*600 + 25000) + " VND" )



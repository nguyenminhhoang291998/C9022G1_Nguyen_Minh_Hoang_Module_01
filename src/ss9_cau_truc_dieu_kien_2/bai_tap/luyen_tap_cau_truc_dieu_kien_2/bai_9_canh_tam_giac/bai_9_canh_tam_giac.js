let a = parseFloat(prompt("Độ dài cạnh thứ nhất là: "))
let b = parseFloat(prompt("Độ dài cạnh thứ hai là: "))
let c = parseFloat(prompt("Độ dài cạnh thứ ba là: "))

if ( (a>0 && b>0 && c>0) && ((a+b)>c || (a+c)>b || (b+c)>a) )
{ alert("Đây là một tam giác")}
    else
        alert("Đây không phải là tam giác")

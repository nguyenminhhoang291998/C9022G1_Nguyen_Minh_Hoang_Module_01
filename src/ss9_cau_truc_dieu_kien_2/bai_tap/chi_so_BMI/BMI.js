let weight = parseFloat(prompt("Nhập cân nặng của bạn (kg): "));
let height = parseFloat(prompt("Nhập chiều cao của bạn (m) : "));
let BMI = weight/(height*height)
// làm tròn 2 số thập phân
let BMI1 = parseFloat(BMI).toFixed(2);

if (BMI1 >= 30.0){
        alert("Chỉ số BMI của bạn là: " + BMI1 + " (Obese).")}
 else if (BMI1 >= 25.0){
        alert("Chỉ số BMI của bạn là: " + BMI1 + " (Overweight).")}
    else if (BMI1 >= 18.5){
        alert("Chỉ số BMI của bạn là: " + BMI1 + " (Normal).")}
        else
         alert("Chỉ số BMI của bạn là: " + BMI1 + " (Underweight).")













alert()
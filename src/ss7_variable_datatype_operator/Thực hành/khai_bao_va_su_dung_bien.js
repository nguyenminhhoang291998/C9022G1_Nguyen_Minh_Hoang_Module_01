let i = 10
let f = 20.5
let b = true
let s = 'Hà Nội'

document.write('i = ' + i)
document.write('<br/>')
document.write('f = ' + f)
document.write('<br/>')
document.write('b = ' + b)
document.write('<br/>')
document.write('s = ' + s)

document.write('<br/>')
let width = 20
let height = 10
let area = width * height
document.write('Area = ' + area)
document.write('<br/>')
a = prompt("Nhập số a:")
b = prompt("Nhập số b:")
if(a % b == 0){
    alert(a + " chia hết cho " + b)
}
else{
    alert(a + " không chia hết cho " + b)
}
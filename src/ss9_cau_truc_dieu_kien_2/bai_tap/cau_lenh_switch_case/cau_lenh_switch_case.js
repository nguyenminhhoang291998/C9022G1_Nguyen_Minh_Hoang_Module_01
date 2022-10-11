function send() {
    let a = +document.getElementById("number").value
switch (a) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        resultA = "Tháng " + a + " có 31 ngày"
        break;
    case 2:
        resultA = "Tháng " + a + " có 28 ngày hoặc 29 ngày"
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        resultA = "Tháng " + a + " có 31 ngày"
        break;
    default:
        resultA = "Nhập sai tháng"
        break;
}
    document.getElementById("result").innerHTML = resultA
}
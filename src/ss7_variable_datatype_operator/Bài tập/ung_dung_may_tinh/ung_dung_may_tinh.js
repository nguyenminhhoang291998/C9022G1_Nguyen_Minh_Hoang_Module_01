function caculator(dau) {


    var value1 = document.getElementById("value1").value
    var value2 = document.getElementById("value2").value
    giatri1 = parseInt(value1)
    giatri2 = parseInt(value2)

    var ketqua

    switch (dau) {
        case "addition":
            ketqua = "Result: " + (giatri1 + giatri2)
            break;
        case "subtraction":
            ketqua = "Result: " + (giatri1 - giatri2)
            break;
        case "multiplication":
            ketqua = "Result: " + (giatri1 * giatri2)
            break;
        case "division":
            ketqua = "Result: " + (giatri1 / giatri2)
            break;
    }

    document.getElementById("result").innerHTML = ketqua
}
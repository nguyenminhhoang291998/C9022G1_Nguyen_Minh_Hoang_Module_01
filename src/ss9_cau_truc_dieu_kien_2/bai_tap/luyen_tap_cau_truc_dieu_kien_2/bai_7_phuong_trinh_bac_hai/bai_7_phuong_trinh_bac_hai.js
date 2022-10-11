function resultX() {
    let a = parseFloat(document.getElementById("a").value)
    let b = parseFloat(document.getElementById("b").value)
    let c = parseFloat(document.getElementById("c").value)
    let d = b*b - 4*a*c
    let result;
    if (d == 0){
        result = "Phương trình có nghiệm kép" + (-b/(2*a))}
    else if(d < 0){
        result = "Phương trình vô nghiệm"}
    else if (d > 0){
        let e = Math.sqrt(d)
        result = "Phương trình có 2 nghiệm là " + ((-b+e)/(2*a))+" và " + ((-b-e)/(2*a)) }

    document.getElementById("display").innerHTML = result
}

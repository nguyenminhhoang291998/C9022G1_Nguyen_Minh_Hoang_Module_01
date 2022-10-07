function ChangeMoney(){

    let Amount = document.getElementById("Amount").value
    let FromA = document.getElementById("From").value
    let ToA = document.getElementById("To").value
    let ResultA

    if(FromA === "VND" && ToA === "USD"){
        ResultA = "Result: " + (Amount / 23000) + "$"
    }
    else if (FromA === "USD" && ToA === "VND"){
        ResultA = "Result: "+ (Amount * 23000) + "VND"
    }
    else if(FromA === "VND"){
        ResultA = "Result: " + Amount + "Đ"
    }else{
        ResultA = "Result: " + Amount + "$"
    }

    document.getElementById("result").innerHTML = ResultA
}
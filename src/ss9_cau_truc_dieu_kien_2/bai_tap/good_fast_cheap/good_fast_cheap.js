
function switchGood() {
    let isGood = document.getElementById("g").checked;
    let isCheap = document.getElementById("c").checked;
    let isFast = document.getElementById("f").checked;
       if (isCheap == true && isFast == true) {
        if (Math.random() < (1 / 2)) {
            document.getElementById("c").checked = false;
        } else {
            document.getElementById("f").checked = false;
        }
    }
}
function switchCheap() {
    let isGood = document.getElementById("g").checked;
    let isCheap = document.getElementById("c").checked;
    let isFast = document.getElementById("f").checked;

    if (isGood == true && isFast == true) {
        if (Math.random() < (1 / 2)) {
            document.getElementById("g").checked = false;
        } else {
            document.getElementById("f").checked = false;
        }
    }
}
function switchFast() {
    let isGood = document.getElementById("g").checked;
    let isCheap = document.getElementById("c").checked;
    let isFast = document.getElementById("f").checked;

    if (isCheap == true && isGood == true) {
        if (Math.random() < (1 / 2)) {
            document.getElementById("c").checked = false;
        } else {
            document.getElementById("g").checked = false;
        }
    }
}
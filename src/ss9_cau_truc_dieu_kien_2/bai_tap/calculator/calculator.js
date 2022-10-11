let view = document.getElementById("view")
function inputValue(value) {
    view.value += value

}
function reset() {
    view.value= ""

}
function result() {
    let result = eval(view.value)
    view.value = result


}

let imgObj = null;
imgObj = document.getElementById('myImage');
function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.right = '0px';
}
function moveRight() {
    imgObj.style.right = parseInt(imgObj.style.left) + 50 + 'px';
}
window.onload = init;
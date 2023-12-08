// JavaScript source code

var openb = document.getElementById("open");

var box = document.getElementById("box");

function open_box() {
    box.style.display = "block";
    openb.style.display = "none";
}

function close_box() {
    box.style.display = "none";
    openb.style.display = "block";
}
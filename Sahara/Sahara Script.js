// JavaScript source code

document.getElementById("button").addEventListener("click", function (){
    document.querySelector(".popout").style.display = "flex";
});

document.getElementById(".close").addEventListener("click", function () {
    document.querySelector(".popout").style.display = "none";
});
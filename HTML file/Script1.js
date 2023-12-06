// JavaScript source code
function changeText(id) {
    id.innerHTML = "Yay it worked!";
}

function displayDate(id) {
    id.innerHTML = "Date is Today";
}


document.getElementById("button").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "flex";
});

document.getElementById(".close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
});
function newname() {
    document.getElementById("namen").innerHTML = "Jamie Ninja";
}

document.getElementById("toddbtn").onclick = function() {
    document.getElementById("toddtop").outerHTML = "";
}
document.getElementById("philbtn").onclick = function() {
    document.getElementById("philtop").outerHTML = "";
}
var count = 2;
var countElement = document.querySelector("#count")

function incrjus() {
    count--;
    countElement.innerText = count;
}

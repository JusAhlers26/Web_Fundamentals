var count = 1;
var countElement = document.querySelector("#count")

function incrjus() {
    count++;
    countElement.innerText = count + "  Like(s)";
}
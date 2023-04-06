const display = document.getElementById("display");
const equal_button = document.getElementById("equal");
const backspace_button = document.getElementById("backspace");
var clear = false;

document.querySelectorAll(".number").forEach(i => {
    i.addEventListener(
    "click", click_number)
});

document.querySelectorAll(".operation").forEach(i => {
    i.addEventListener(
    "click", click_operation)
});

equal_button.addEventListener("click", equal);
backspace_button.addEventListener("click", backspace);

function click_number(e){
    if (display.innerHTML == "0" || clear){
        display.innerHTML = e.target.innerText;
        clear = false;
    } else{
        display.innerHTML += e.target.innerText;
    }
}

function click_operation(e){
    display.innerHTML += " " + e.target.innerHTML + " ";
}

function equal(e){
    display.innerText = eval(display.innerText);
    clear = true;
}

function backspace(e){
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1)
    } else{
        display.innerText = "0";
    }
}
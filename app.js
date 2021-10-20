var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

console.log(txtInput);

function clickEventHandler() {
    outputDiv.innerText = "pika pika pikachu " + txtInput.value;
}

btnTranslate.addEventListener("click", clickEventHandler) //this is basically concept of call back function
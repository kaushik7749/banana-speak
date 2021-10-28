var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error occured", error)
}

function clickEventHandler() {
    var inputText = txtInput.value; //taking input text
    //calling server from processing
    fetch(getTranslationURL(inputText))
        .then(respone => respone.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
}
btnTranslate.addEventListener("click", clickEventHandler) //this is basically concept of call back function
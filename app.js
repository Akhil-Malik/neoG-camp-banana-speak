var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
console.log(txtInput)

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text }

btnTranslate.addEventListener("click", function clickEventHandler(){
//    outputDiv.innerText = "hyshysh " + txtInput.value;
var inputText = txtInput.value;

fetch(getTranslationURL(inputText))
.then(response=> response.json() )
.then(json=>{
    var translatedText = json.contents.translated;
    outputDiv.innerText = translatedText;
    })
})
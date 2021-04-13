//npm install parcel-bundler --save-dev
//"dev": "parcel index.html",
//"build": "parcel build index.html --public-url ./"

var btnTranslate=document.querySelector("#btn-talk");
var btnYoda=document.querySelector("#btn-yoda");

var textInput=document.querySelector("#text-input");
var outputText=document.querySelector("#output-text");
var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=";
var miniUrl="https://api.funtranslations.com/translate/minion.json?text=";

function errorHandler(error){
    console.log("Some error occured",error);
}
function talkHandler(){
    var fullUrl=miniUrl+textInput.value;
    fetch(fullUrl)
    .then(response=>response.json())
    .then(json=>{
        outputText.innerText=json.contents.translated;
    })
    .catch(errorHandler);
}
function clickEventHandler(){
    // console.log("clicked again");
    // console.log(textInput.value)
    // outputText.innerText=textInput.value;
    var fullUrl=url+textInput.value;
    fetch(fullUrl)
    .then(response=>response.json())
    .then(json=>{
        console.log(json.contents.translated);
        var translated=json.contents.translated;
        var textJ=json.contents.text;
        var translation=json.contents.translation;
        outputText.innerText=translated+", "+textJ+", "+translation;
    })
    .catch(errorHandler);
    // outputText.innerText=output.contents.translated+", "+output.contents.text;

}
btnTranslate.addEventListener("click",talkHandler);
btnYoda.addEventListener("click",clickEventHandler)

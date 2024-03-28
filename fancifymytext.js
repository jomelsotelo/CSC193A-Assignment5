
//Function to increase text size
function increaseSize(){
    var element2 = document.getElementById('textinput');
    element2.style.fontSize = "24pt";
}

function showAlert(){
    alert("Hello, World!");
}

function fancyStyle(){
    var element = document.getElementById('textinput');
    element.style.fontWeight = "bold";
    element.style.color = "blue";
    element.style.textDecoration = "underline";
}
function normalStyle(){
    var element = document.getElementById('textinput');
    element.style.fontWeight = "normal";
    element.style.color = "black";
    element.style.textDecoration = null;
}

function upperCaseText(){
    var element = document.getElementById('textinput');
    element.value = element.value.toUpperCase();
    addSuffix();
}


function addSuffix(){
    var element = document.getElementById('textinput');
    var str = element.value;
    var sentences = str.split(".");

    for(var i=0; i<sentences.length; i++){
        var words = sentences[i].trim().split(" ");
        if(words.length > 0){
            var lastWord = words.length - 1;
            words[lastWord] += "-Moo";
        }
        sentences[i] = words.join(" ");
    }
    var result = sentences.join(".");
    element.value = result;
}
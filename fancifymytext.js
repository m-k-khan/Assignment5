function showAlert() {
    alert("Hello, world!");
}

function makeBigger(event) {
    event.preventDefault();
    document.getElementById("textInput").style.fontSize = "24pt";
}

function toggleStyle() {
    var inputText = document.getElementById("textInput");
    var fancyRadio = document.getElementById("fancyRadio");

    if(fancyRadio.checked) {
        inputText.style.fontWeight = "bold";
        inputText.style.color = "blue";
        inputText.style.textDecoration = "underline";
    }
    else {
        inputText.style.fontWeight = "normal";
        inputText.style.color = "black";
        inputText.style.textDecoration = "none"; 
    }
}

function makeMoo(event) {
    event.preventDefault();
    var inputText = document.getElementById("textInput");
    var str = inputText.value;

    str = str.toUpperCase();

    var parts = str.split(". ");

    for (var i = 0; i < parts.length; i++) {
        parts[i] += "--Moo";
    }

    str = parts.join(". ");

    inputText.value = str;
}



document.getElementById("biggerButton").onclick = makeBigger;
document.getElementById("fancyRadio").onchange = toggleStyle;
document.getElementById("boringRadio").onchange = toggleStyle;
document.getElementById("mooButton").onclick = makeMoo;

var keys = {a: {
    num: 65,
    urls: 'bubbles',
},
s: {
    num: 83,
    urls: 'clay'
},
d: {
    num: 68,
    urls: 'confetti',
},
f: {
    num: 70,
    urls: 'corona',
},
g: {
    num: 71,
    urls: 'dotted-spiral',
},
h: {
    num: 72,
    urls: 'flash-1',
},
j: {
    num: 74,
    urls: 'flash-2',
},
k: {
    num: 75,
    urls: 'flash-3',
},
l: {
    num: 76,
        urls: 'glimmer',
}
}

window.addEventListener("keydown", keyboardPress);
window.addEventListener("keyup", keyboardPress);

function keyboardPress(event){
    //letter
    var keyPress = event.key

    //number
    var final = keys[keyPress].num;

    var entry = document.getElementById(keyPress)
    entry.classList.toggle("clicked");
    //new Audio('sounds/' + keyPress + '.mp3').play();
    new Audio('sounds/' + keys[keyPress].urls + '.mp3').play();
}

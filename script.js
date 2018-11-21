
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


var allImgs = document.querySelectorAll("img")
window.addEventListener("keydown", keyboardPress);

function keyboardPress(event){
    var letter = event.key
    var img = document.getElementById(letter)

    //adds class
    img.classList.add("clicked");
    new Audio('sounds/' + keys[letter].urls + '.mp3').play();

    //adds event listener to each image
    for(var i = 0; i < 9; i++){
        allImgs[i].addEventListener("transitionend", removeClass);
    }

    //removes class
    function removeClass(){
        img.classList.remove("clicked")
    }
}


var keys = {a: {
    num: 65,
    urls: 'sounds/bubbles.mp3',
},
s: {
    num: 83,
    urls: 'sounds/clay.mp3'
},
d: {
    num: 68,
    urls: 'sounds/confetti.mp3',
},
f: {
    num: 70,
    urls: 'sounds/corona.mp3',
},
g: {
    num: 71,
    urls: 'sounds/flash-1.mp3',
},
h: {
    num: 72,
    urls: 'sounds/glimmer.mp3',
},
j: {
    num: 74,
    urls: 'sounds/moon.mp3',
},
k: {
    num: 75,
    urls: 'sounds/piston-1.mp3',
},
l: {
    num: 76,
        urls: 'sounds/squiggle.mp3',
}
}


var allImgs = document.querySelectorAll("img")
window.addEventListener("keydown", keyboardPress);


function keyboardPress(event){
    var letter = event.key
    var img = document.getElementById(letter)

    //adds class
    img.classList.add("clicked");
    new Audio(keys[letter].urls).play();

    //adds event listener to each image
    for(var i = 0; i < 9; i++){
        allImgs[i].addEventListener("transitionend", removeClass);
    }

    //removes class
    function removeClass(){
        img.classList.remove("clicked")
    }
}

for(var i = 0; i < 9; i++){
    allImgs[i].addEventListener("mousedown", clicked);
}

function clicked(event) {
    var letter = event.path[0].id
    var img = document.getElementById(letter)

        //adds class
        img.classList.add("clicked");
        new Audio(keys[letter].urls).play();
    
        //adds event listener to each image
        for(var i = 0; i < 9; i++){
            allImgs[i].addEventListener("transitionend", removeClass);
        }
    
        //removes class
        function removeClass(){
            img.classList.remove("clicked")
        }
}


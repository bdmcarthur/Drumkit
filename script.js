var keys = {
a: 65,
s: 83,
d: 68,
f: 70,
g: 71,
h: 72,
j: 74,
k: 75,
l: 76,
}


window.addEventListener("keydown", keyboardPress);
window.addEventListener("keyup", keyboardPress);

function keyboardPress(event){
    //letter
    var keyPress = event.key
    console.log(keyPress)
    //number
    var final = keys[keyPress];
    console.log(final)
    var entry = document.getElementById(keyPress)
    entry.classList.toggle("clicked");

}

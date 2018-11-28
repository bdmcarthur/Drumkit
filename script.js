
var keys = {a: {
    num: 65,
    urls: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/kraftwerkesque/12[kb]kik2.aif.mp3',
},
s: {
    num: 83,
    urls: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/punches%20hits%20discoblasts%20bombs/61[kb]stereo_punch.aif.mp3'
},
d: {
    num: 68,
    urls: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/kraftwerkesque/8[kb]zap5.aif.mp3',
},
f: {
    num: 70,
    urls: 'https://sampleswap.org/samples-ghost/VOCALS%20and%20SPOKEN%20WORD/percussive%20or%20punchy/48[kb]voice_uh-clap.aif.mp3',
},
g: {
    num: 71,
    urls: 'https://sampleswap.org/samples-ghost/INSTRUMENTS%20single%20samples/synth/40[kb]kewl_reverse.aif.mp3',
},
h: {
    num: 72,
    urls: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/various%20weird%20hits/61[kb]catcall.aif.mp3',
},
j: {
    num: 74,
    urls: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/punches%20hits%20discoblasts%20bombs/1181[kb]drop-kick-07.wav.mp3',
},
k: {
    num: 75,
    urls: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/EC-guns-hats-kicks-snares/EC-guns/38[kb]ec-gunz13.wav.mp3',
},
l: {
    num: 76,
        urls: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/various%20weird%20hits/102[kb]coins-thrown.wav.mp3',
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

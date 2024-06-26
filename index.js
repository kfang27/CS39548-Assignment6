//document.querySelectorAll("button").addEventListener("click", handleClick)


// let btns=document.querySelectorAll("button");
// for (let btn of btns)
//     btn.addEventListener("click", handleClick)



// function handleClick()
// {
//         alert("I got clicked!")
// }

let sounds_list = [
    "sounds/crash.mp3",
    "sounds/kick-bass.mp3",
    "sounds/snare.mp3",
    "sounds/tom-1.mp3",
    "sounds/tom-2.mp3",
    "sounds/tom-3.mp3",
    "sounds/tom-4.mp3"
];

let images_list = [
    "images/crash.png",
    "images/kick.png",
    "images/snare.png",
    "images/tom1.png",
    "images/tom2.png",
    "images/tom3.png",
    "images/tom4.png"
];

//this returns a list of nodes
let btns = document.querySelectorAll("button");

// for (let btn of btns)
//     btn.addEventListener("click", addNoise)

for (let i = 0; i < btns.length; i++){
    /* Doing simply addNoise(sounds_list[i]); without the function reference or even a arrow function, 
    the sounds are performed immediately and clicking the buttons will not play its sound */
    btns[i].addEventListener("click", function() {
        addNoise(sounds_list[i]);
    })
    btns[i].style.backgroundImage = `url(${images_list[i]})`;
}

function addNoise(sound_file)
{
    var audio = new Audio(sound_file);
    audio.play();
}

// you will see that each button has a letter(w,a,s,d,j,k,l). Add to your index.js: 
// when you press these letters on the keyboard the sound of the corresponding drum also goes off. 
let key_to_sound_map = {
    'w': 'sounds/crash.mp3',
    'a': 'sounds/kick-bass.mp3',
    's': 'sounds/snare.mp3',
    'd': 'sounds/tom-1.mp3',
    'j': 'sounds/tom-2.mp3',
    'k': 'sounds/tom-3.mp3',
    'l': 'sounds/tom-4.mp3'
};

document.addEventListener("keydown", function(event) {
    let key_pressed = event.key.toLowerCase();

    if (key_to_sound_map.hasOwnProperty(key_pressed)){
        let sound = key_to_sound_map[key_pressed];
        addNoise(sound);
    }
});



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
    "images/kick-bass.png",
    "images/snare.png",
    "images/tom-1.png",
    "images/tom-2.png",
    "images/tom-3.png",
    "images/tom-4.png"
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
}


function addNoise(sound_file)
{
    var audio = new Audio(sound_file);
    audio.play();
}
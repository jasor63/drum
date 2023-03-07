var drumClickAll = document.querySelectorAll(".drum");
var drumClickAllLength = drumClickAll.length;

for (var i = 0; i < drumClickAllLength; i++) {
    let drumClick = drumClickAll[i].addEventListener("click", function () {
        let buttonIdentifier = this.textContent;

        clickSound(buttonIdentifier);

        imageHover(buttonIdentifier);
    })
}

document.addEventListener("keypress", function (keypresser) {
    clickSound(keypresser.key);
});

function clickSound(key) {
    switch (key) {
        case "w":
            let sound = new Audio("./sounds/tom-1.mp3");
            sound.play();
            break;
        case "a":
            let sound2 = new Audio("./sounds/tom-2.mp3");
            sound2.play();
            break;
        case "s":
            let sound3 = new Audio("./sounds/tom-3.mp3");
            sound3.play();
            break;
        case "d":
            let sound4 = new Audio("./sounds/tom-4.mp3");
            sound4.play();
            break;
        case "j":
            let sound5 = new Audio("./sounds/crash.mp3");
            sound5.play();
            break;
        case "k":
            let sound6 = new Audio("./sounds/kick-bass.mp3");
            sound6.play();
            break;
        case "l":
            let sound7 = new Audio("./sounds/snare.mp3");
            sound7.play();
            break;

    }
    imageHover(key);
};

function imageHover(clickHover){
    let a = document.querySelector("." + clickHover);
    a.classList.add("pressed");

    setTimeout(function (){
        a.classList.remove("pressed");
    }, 100)
}





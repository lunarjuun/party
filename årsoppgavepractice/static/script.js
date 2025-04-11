// MAIN PAGE!!!!!!!!!!!!!!

element.addEventListener("click", myFunction);

function myFunction() {
    alert ("Hello World!");
}

function partyTime() {
    let sound = new Audio(audioPath); // bruker nå Flask's path
    sound.play();
}


// MARIADB SCRIPTING
// MAIN PAGE!!!!!!!!!!!!!!

element.addEventListener("click", myFunction);

function myFunction() {
    alert ("Hello World!");
}

// OLD PARTY TIME
//  function partyTime() {
//     let sound = document.getElementById("confettiSound");
//     sound.play();
// }

function partyTime() {
    let sound = new Audio("årsoppgavepractice/media/confetti-pop.mp3"); // allows audio overlapping for spam
    sound.play();
}

// 

const deck = []
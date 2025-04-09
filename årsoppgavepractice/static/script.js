// MAIN PAGE!!!!!!!!!!!!!!

element.addEventListener("click", myFunction);

function myFunction() {
    alert ("Hello World!");
}

function partyTime() {
    let sound = new Audio(audioPath); // Now uses Flask's path
    sound.play();
}

window.onload = function () {
    const img = document.getElementById('spinner');
    let angle = 0; // starting angle

    function spin() {
        angle += 10; // degrees spun each frame
        img.style.transform = `rotate(${angle}deg)`; // instead of using style u can just do it here
        requestAnimationFrame(spin); // makes it smoothhh    
    }

 spin(); // call the function

}



// MARIADB SCRIPTING


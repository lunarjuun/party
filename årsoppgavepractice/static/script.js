document.addEventListener('DOMContentLoaded', () => {
  const preloadImages = [new Image(), new Image()];
  preloadImages[0].src = img1;
  preloadImages[1].src = img2;

  const img = document.getElementById('toggleImage');
  let showingFirst = true;

  setInterval(() => {
    img.src = showingFirst ? img2 : img1;
    showingFirst = !showingFirst;
  }, 1500);
});

function partyTime() {
    let sound = new Audio("static/media/confetti-pop.mp3"); // allows audio overlapping for spam
    sound.play();
}
const preloadImages = [new Image(), new Image()]
preloadImages[0].src = img1;
preloadImages[1].src = img2;

const img = document.getElementById('toggleImage')
const img1 = '../static/media/dealer/har1.gif';
const img2 = '../static/media/dealer/har2.gif';

let showingFirst = true;

  setInterval(() => {
    if (showingFirst) {
      img.src = img2;
    } else {
      img.src = img1;
    }
    showingFirst = !showingFirst;
  }, 1500);

function partyTime() {
    let sound = new Audio("static/media/confetti-pop.mp3"); // allows audio overlapping for spam
    sound.play();
}
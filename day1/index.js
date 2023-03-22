function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop the function from running 

    key.classList.add('playing');
    audio.currentTime = 0; // rewind to the start;
    audio.play();
}

const keys = document.querySelectorAll('.keys');
window.addEventListener('keydown', playSound);

const audio = document.getElementById('audio-element');
const playPauseBtn = document.getElementById('play-pause');

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

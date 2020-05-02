let playButton = document.getElementById("play-button");
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
const audioElement = document.querySelector("audio");
const track = audioContext.createMediaElementSource(audioElement);
track.connect(audioContext.destination);
playButton.addEventListener("click", (e) => {
  if (audioElement.paused) {
    audioElement.play();
    playButton.textContent = "Stop";
  } else {
    audioElement.pause();
    playButton.textContent = "Play";
    audioElement.currentTime = 0;
  }
});

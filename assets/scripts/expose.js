// expose.js

window.addEventListener('DOMContentLoaded', init);

const audio = document.querySelector("audio");
const hornSelect = document.getElementById("horn-select");
const jsConfetti = new JSConfetti();

function init() {

  hornSelect.addEventListener('change', changeHorn);

  document.getElementById("volume").addEventListener('change', changeAudio);

  document.querySelector("button").addEventListener('click', playSound);
}

function changeHorn() {

  let soundImg = document.getElementById("expose").querySelector("img");
  if (hornSelect.value == "air-horn") { 
    soundImg.src="/Lab5_Starter/assets/images/air-horn.svg";
    soundImg.alt="Air Horn";
    audio.src="/Lab5_Starter/assets/audio/air-horn.mp3";
  }
  else if (hornSelect.value == "car-horn") {
    soundImg.src="/Lab5_Starter/assets/images/car-horn.svg";
    soundImg.alt="Car Horn";
    audio.src="/Lab5_Starter/assets/audio/car-horn.mp3";
  }
  else if (hornSelect.value == "party-horn") {
    soundImg.src="/Lab5_Starter/assets/images/party-horn.svg";
    soundImg.alt="Party Horn";
    audio.src="/Lab5_Starter/assets/audio/party-horn.mp3";
  }
}

function changeAudio () {

  let volSetting = document.getElementById("volume").value;
  audio.volume = volSetting / 100;
  
  let icon = document.querySelector('img[alt="Volume level 2"]');
  if (volSetting == 0) {
    icon.src = "/Lab5_Starter/assets/icons/volume-level-0.svg";
    icon.alt="Volume Level 0";
  }
  else if (volSetting < 33) {
    icon.src = "/Lab5_Starter/assets/icons/volume-level-1.svg";
    icon.alt="Volume Level 1";
  }
  else if (volSetting < 67) {
    icon.src = "/Lab5_Starter/assets/icons/volume-level-2.svg";
    icon.alt="Volume Level 2";
  }
  else {
    icon.src = "/Lab5_Starter/assets/icons/volume-level-3.svg";
    icon.alt="Volume Level 3";
  }
}

function playSound () {
  audio.play();
  if (hornSelect.value == "party-horn")
    jsConfetti.addConfetti();
}
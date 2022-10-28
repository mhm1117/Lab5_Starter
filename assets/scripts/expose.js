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
    soundImg.src="../images/air-horn.svg";
    audio.src="../audio/air-horn.mp3";
  }
  else if (hornSelect.value == "car-horn") {
    soundImg.src="../images/car-horn.svg";
    audio.src="../audio/car-horn.mp3";
  }
  else if (hornSelect.value == "party-horn") {
    soundImg.src="../images/party-horn.svg";
    audio.src="../audio/party-horn.mp3";
  }
}

function changeAudio () {

  let volSetting = document.getElementById("volume").value;
  audio.volume = volSetting / 100;
  
  let icon = document.querySelector('img[alt="Volume level 2"]');
  if (volSetting == 0)
    icon.src = "../icons/volume-level-0.svg";
  else if (volSetting < 33)
    icon.src = "../icons/volume-level-1.svg";
  else if (volSetting < 67)
    icon.src = "../icons/volume-level-2.svg";
  else 
    icon.src = "../icons/volume-level-3.svg";
}

function playSound () {
  audio.play();
  if (hornSelect.value == "party-horn")
    jsConfetti.addConfetti();
}

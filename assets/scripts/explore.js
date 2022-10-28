// explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;
const textArea = document.querySelector("textarea");
const voiceSelect = document.querySelector("select");
const face = document.querySelector('img');
let voices = [];
function init() {
  
  setInterval(isSpeaking, 500);

  addVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = addVoiceList;
  }

  document.querySelector('button').addEventListener('click', talk);
}

function talk () {

  const utterance = new SpeechSynthesisUtterance(textArea.value);

  let selected = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for (let i = 0; i < voices.length ; i++) {
    if (voices[i].name === selected) {
      utterance.voice = voices[i];
    }
  }

  synth.speak(utterance);
}

function addVoiceList () {
  
  voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

function isSpeaking() {

  if (synth.speaking) {
    face.src = "/Lab5_Starter/assets/images/smiling-open.png";
    face.alt = "Smiling Open Face";
  }
  else if (!(synth.speaking)) {
    face.src = "/Lab5_Starter/assets/images/smiling.png";
    face.alt = "Smiling Face";
  }
}
// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  const textSpeech = document.getElementById("text-to-speak");
  const button = document.querySelector("button");

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = "";

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();

  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener("click", (event) => {
    const selectedVoice = voices[voiceSelect.value];
    const utterance = new SpeechSynthesisUtterance(textSpeech.value);

    utterance.voice = selectedVoice;
    utterance.onstart = () => {
      document.querySelector("img").src = "assets/images/smiling-open.png";
    };
    utterance.onend = () => {
      document.querySelector("img").src = "assets/images/smiling.png";
    };
    synth.speak(utterance);
  });
}
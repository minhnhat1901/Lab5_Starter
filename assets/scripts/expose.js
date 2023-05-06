// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const soundSelection = document.getElementById("horn-select");
  const image = document.querySelector("#expose img"); // #expose>img
  const playSoundButton = document.querySelector("#expose button"); // #expose>button is the same
  const audio = document.querySelector("#expose audio"); // #expose>audio 
  const volumeImage = document.querySelector("#volume-controls img"); // #volume-controls>img
  const volumeInput = document.getElementById("volume");
  const confetti = new JSConfetti();

  soundSelection.addEventListener("change", (event) => {
    switch(soundSelection.value) {
      case ("air-horn"): 
        image.src = "assets/images/air-horn.svg";
        break;

      case ("car-horn"):
        image.src = "assets/images/car-horn.svg";
        break;
      
      case ("party-horn"):
        image.src = "assets/images/party-horn.svg";
        break;

      default:
        image.src = "assets/images/no-image.png";
    }
  });

  playSoundButton.addEventListener("click", (event) => {
    const selectedHorn = soundSelection.value;
    switch (selectedHorn) {
      case ("air-horn"):
        audio.src = 'assets/audio/air-horn.mp3';
        break;
      
      case ("car-horn"):
        audio.src = 'assets/audio/car-horn.mp3';
        break;
      
      case ("party-horn"):
        audio.src = 'assets/audio/party-horn.mp3';
        confetti.addConfetti();
        break;

      default:
        audio.src = '';
    }

    const volume = volumeInput.value / 100;
    audio.volume = volume;

    // Play the audio
    audio.currentTime = 0;
    audio.play();
  });

  volumeInput.addEventListener("input", (event) => {
    if (volumeInput.value == 0) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
      volumeImage.alt = "Volume level 0";
    } else if (volumeInput.value < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
      volumeImage.alt = "Volume level 1";
    } else if (volumeInput.value < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
      volumeImage.alt = "Volume level 2";
    } else if (volumeInput.value < 100){
      volumeImage.src = "assets/icons/volume-level-3.svg";
      volumeImage.alt = "Volume level 3";
    }
  });
}


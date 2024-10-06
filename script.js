const drumKitContainer = document.querySelector('.drum-kit-container')

drumKitContainer.addEventListener('click', (e)=>{

    const target = e.target;

    if(target.classList.contains('btn')){
      const soundName = target.getAttribute("data-sound");
      const sound = new Audio(`audios/${soundName}.wav`);
      playSound(sound, target);
    }
    
})

window.addEventListener("keypress", (e) => {
  const keyToSound = {
    c: "crash",
    f: "floor-tom",
    m: "mid-tom",
    h: "high-tom",
    r: "ride",
    s: "snare",
    k: "kick",
    i: "hi-hat-open",
    o: "hi-hat-close",
  };

  const soundName = keyToSound[e.key];
  const button = document.querySelector(`.btn[data-sound=${soundName}]`);
  if (soundName) {
    const sound = new Audio(`audios/${soundName}.wav`);
    playSound(sound, button);
  }
});

const playSound = (sound, button) => {
  if (sound) {
    sound.play();
  }
  if (button) {
    animateInstrument(button);
    button.classList.add("active");
    setTimeout(() => {
      button.classList.remove("active");
    }, 100);
  }
};

const animateInstrument = (button) => {
  if (button.getAttribute("data-sound") == "hi-hat-close") {
    document.querySelector(".hi-hat-top").style.transform = `translate(283px, 118px)`;
    setTimeout(() => {
      document.querySelector(".hi-hat-top").style.transform = `translate(283px, 116px)`;
    }, 100);
  }
  if ( button.getAttribute("data-sound") == "crash" ||button.getAttribute("data-sound") == "ride") {
    document.querySelector(".crash").style.transform = `translate(42px, 78px) rotate(-2.2deg)`;
    setTimeout(() => {
      document.querySelector(".crash").style.transform = `translate(42px, 78px) rotate(-7.2deg)`;
    }, 100);
  }
};
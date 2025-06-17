window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`div[data-key='${e.keyCode}']`);
  key.classList.add("playing");
  console.log(audio);
  if (!audio) return;
  audio.currentTime = 0; // reset audio
  audio.play();
});
const keys = document.querySelectorAll(".drumkit__button");
keys.forEach((key) =>
  key.addEventListener("transitionend", (e) => {
    console.log('transition ended')
    console.log(key)
    
    key.classList.remove("playing");
    

  })
);

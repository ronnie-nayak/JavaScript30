//lskdfjdslkjf
console.log("Hello World");
const allKeys = document.querySelector(".keys");
console.log(allKeys);
function play(sound) {
  var audio = new Audio(`sounds/${sound}.wav`);
  audio.play();
}
allKeys.addEventListener("click", (event) => {
  console.log(event.target.classList);
  if (event.target.classList.contains("keys")) {
    console.log("You clicked on the keys");
  } else if (event.target.classList.contains("key")) {
    console.log("you clicked on a key");
    sound = event.target.children[1].textContent;
    console.log(sound);
    play(sound);
    event.target.classList.add("playing");
    setTimeout(() => {
      event.target.classList.remove("playing");
    }, 100);
  } else {
    console.log("you clicked on a key's child");

    sound = event.target.parentElement.children[1].textContent;
    console.log(sound);
    play(sound);
    event.target.parentElement.classList.add("playing");
    setTimeout(() => {
      event.target.parentElement.classList.remove("playing");
    }, 100);
  }
});

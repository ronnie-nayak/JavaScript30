const sec = document.querySelector(".second-hand");
const min = document.querySelector(".min-hand");
const hour = document.querySelector(".hour-hand");

let hour, minute, second;

function currentTime() {
  let Time = new Date();

  h = Time.getHours();
  m = Time.getMinutes();
  s = Time.getSeconds();
}

setInterval(currentTime, 1000);

const secHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function currentTime() {
  let Time = new Date();

  let hour = Time.getHours() / 12;
  let minute = Time.getMinutes() / 60;
  let second = Time.getSeconds() / 60;

  secHand.style.transform = `rotate(${second * 360 + 90}deg)`;
  minHand.style.transform = `rotate(${minute * 360 + 90}deg)`;
  hourHand.style.transform = `rotate(${hour * 360 + 90}deg)`;
}

setInterval(currentTime, 1000);

const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setClockHands() {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes() + seconds / 60;
  const hours = date.getHours() + minutes / 60;

  const secondHandDegrees = seconds * 6; 
  const minuteHandDegrees = minutes * 6 + secondHandDegrees / 10; 
  const hourHandDegrees = (hours % 12) * 30 + minuteHandDegrees / 12; 

  secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteHandDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourHandDegrees}deg)`;
}

setClockHands();
setInterval(setClockHands, 1000); 

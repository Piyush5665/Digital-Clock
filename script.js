const hands = document.getElementsByClassName("clock_hands");
let pm = false;

setInterval(() => {
  let time = new Date();


  let hours = time.getHours();
  if(hours==0){
    hours=12;
    pm=false;
  }
  if(hours>=12){
    pm=true;
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  if (hours < 10) {
    hands[0].innerHTML = `0${hours}`;
  }
  //   hands[0].innerHTML=(time.getHours()>12)?time.getHours()-12:time.getHours();

  let minutes = time.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  hands[1].innerHTML = minutes;



  let seconds = time.getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  hands[2].innerHTML = seconds;

  if (pm) {
    document.getElementsByClassName("pm")[0].innerHTML = "PM";
  } else {
    document.getElementsByClassName("pm")[0].innerHTML = "AM";
  }

  
}, 1000);

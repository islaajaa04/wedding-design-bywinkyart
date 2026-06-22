const target = new Date("2027-05-21T09:00:00");

setInterval(() => {
  const now = new Date();

  let diff = target - now;

  if (diff <= 0) {
    diff = 0;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;

  document.getElementById("hours").innerHTML = hours;

  document.getElementById("minutes").innerHTML = minutes;

  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

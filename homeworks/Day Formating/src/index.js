const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const today = new Date();
  const dDay = new Date("Dec 24, 2021, 00:00:00").getTime();
  const gap = (dDay - today) / 1000;
  const seconds = String(Math.floor(gap) % 60).padStart(2, "0");
  const minutes = String(Math.floor(gap / 60) % 60).padStart(2, "0");
  const hours = String(Math.floor(gap / (60 * 60)) % 24).padStart(2, "0");
  const days = String(Math.floor(gap / (60 * 60 * 24))).padStart(3, "0");
  clockTitle.innerHTML = `D-${days} ${hours}h ${minutes}m ${seconds}s`;
}

getClock();
setInterval(getClock, 1000);
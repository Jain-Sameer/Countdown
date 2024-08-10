const dateVal = document.querySelector("input");
const TimeVal = document.querySelector("#Time");
const button = document.querySelector("button");
let setDate;
let targetDate;
button.addEventListener("click", function (e) {
  setDate = dateVal.value + "T" + TimeVal.value;
  targetDate = new Date(setDate);
  updateCountdown();
});

function updateCountdown() {
  const currentDate = new Date();

  const TimeDifference = targetDate - currentDate;
  const days = Math.floor(TimeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (TimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const minutes = Math.floor((TimeDifference % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((TimeDifference % (1000 * 60)) / 1000);

  document.querySelector(
    ".timer"
  ).innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;

  setTimeout(updateCountdown, 1000);
}

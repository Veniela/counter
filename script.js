const counterDisplay = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

let count = 0;

// Increase function
increaseBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

// Decrease function (не менше 0)
decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
});

// Reset function
resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

function updateDisplay() {
  counterDisplay.textContent = count;
}

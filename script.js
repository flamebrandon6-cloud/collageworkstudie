let points = 0;
const pointsDisplay = document.getElementById("points");
const clicker = document.getElementById("clicker");

clicker.addEventListener("click", () => {
  points++;
  pointsDisplay.textContent = points;
});

// Select elements
const colorButtons = document.getElementById("colorButtons");
const customColorInput = document.getElementById("customColorInput");
const addColorBtn = document.getElementById("addColorBtn");

// Change background color on button click
colorButtons.addEventListener("click", function (e) {
  if (e.target.classList.contains("color-btn")) {
    const selectedColor = e.target.dataset.color;
    document.body.style.backgroundColor = selectedColor;
  }
});

// Add custom color button
addColorBtn.addEventListener("click", function () {
  const newColor = customColorInput.value.trim();

  if (newColor === "") {
    alert("Please enter a color name or hex code.");
    return;
  }

  const newBtn = document.createElement("button");
  newBtn.className = "color-btn";
  newBtn.style.backgroundColor = newColor;
  newBtn.dataset.color = newColor;

  colorButtons.appendChild(newBtn);
  customColorInput.value = ""; // Clear input
});

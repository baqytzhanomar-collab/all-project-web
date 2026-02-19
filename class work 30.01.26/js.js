
function toggleShape() {
  const shape = document.getElementById("shape");
  shape.classList.toggle("rectangle");
}

function toggleBlock() {
  const block = document.getElementById("block");
  block.classList.toggle("hidden");
}

function toggleDark() {
  document.body.classList.toggle("dark");
}


function toggleMessage() {
  const msg = document.getElementById("message");
  msg.classList.toggle("hidden");
}


const liveInput = document.getElementById("liveInput");
const liveOutput = document.getElementById("liveOutput");

liveInput.addEventListener("input", function() {
  liveOutput.textContent = liveInput.value;
});


const form = document.getElementById("myForm");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMsg").textContent = "Form submitted";
});

function showColor() {
  const selected = document.querySelector('input[name="color"]:checked');
  const result = document.getElementById("colorResult");

  if (selected) {
    result.textContent = "Selected color: " + selected.value;
  } else {
    result.textContent = "Select a color";
  }
}





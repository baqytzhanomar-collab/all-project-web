let count = 0;

const countEl = document.getElementById("count");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

plus.addEventListener("click", () => {
  count++;
  countEl.textContent = count;
});

minus.addEventListener("click", () => {
  if (count > 0) {
    count--;
    countEl.textContent = count;
  }
});

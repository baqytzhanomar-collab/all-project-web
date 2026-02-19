document.querySelectorAll(".comment").forEach(comment => {
  const plus = comment.querySelector(".plus");
  const minus = comment.querySelector(".minus");
  const count = comment.querySelector(".count");

  plus.addEventListener("click", () => {
    count.textContent = Number(count.textContent) + 1;
  });

  minus.addEventListener("click", () => {
    count.textContent = Number(count.textContent) - 1;
  });
});
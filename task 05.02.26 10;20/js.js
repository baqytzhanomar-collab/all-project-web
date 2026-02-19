let count = 0;

const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const score = document.querySelector(".score");

plusBtn.addEventListener("click", () => {
  count++;
  score.textContent = count;
});

minusBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    score.textContent = count;
  }
});

/* thumbnails */
const thumbs = document.querySelectorAll(".thumb");
const mainImg = document.querySelector(".big-photo img");

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    thumbs.forEach(t => t.classList.remove("active"));
    thumb.classList.add("active");

    const img = thumb.querySelector("img").src
      .replace("-thumbnail", "");
    mainImg.src = img;
  });
});

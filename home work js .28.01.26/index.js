
const text1 = document.getElementById("text1");
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
  text1.classList.toggle("selected");
});


const texts = [
  document.getElementById("text1"),
  document.getElementById("text2"),
  document.getElementById("text3")
];
const toggleCompactBtn = document.getElementById("toggleBtn"); 
let isCompact = false;

toggleCompactBtn.addEventListener("click", () => {
  isCompact = !isCompact;
  texts.forEach(text => {
    if (isCompact) {
      text.classList.add("compact");
    } else {
      text.classList.remove("compact");
    }
  });
});

const badge = document.getElementById("badge");
const toggleBadgeBtn = document.getElementById("toggleBtn");
toggleBadgeBtn.addEventListener("click", () => {
  badge.style.display = badge.style.display === "none" ? "inline-block" : "none";
});

const likeBtn = document.getElementById("likeBtn");
likeBtn.addEventListener("click", () => {
  likeBtn.classList.toggle("liked");
  likeBtn.textContent = likeBtn.classList.contains("liked") ? "Liked" : "Like";
});

const longText = document.getElementById("longText");
const toggleReadBtn = document.getElementById("toggleBtn");
toggleReadBtn.addEventListener("click", () => {
  const isHidden = longText.classList.toggle("hidden");
  toggleReadBtn.textContent = isHidden ? "Read More" : "Read Less";
});

const lockBtn = document.getElementById("lockBtn");
lockBtn.addEventListener("click", () => {
  lockBtn.classList.toggle("unlocked");
  lockBtn.textContent = lockBtn.classList.contains("unlocked") ? "Unlocked" : "Locked";
});

const cards = document.querySelectorAll(".appleBox");
const toggleCardsBtn = document.getElementById("toggleBtn");
let hidden = false;
toggleCardsBtn.addEventListener("click", () => {
  hidden = !hidden;
  cards.forEach(card => card.classList.toggle("hidden", hidden));
});

const loadBtn = document.getElementById("loadBtn");
loadBtn.addEventListener("click", () => {
  loadBtn.classList.toggle("loading");
  loadBtn.textContent = loadBtn.classList.contains("loading") ? "Loading..." : "Ready";
});

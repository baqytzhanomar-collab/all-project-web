const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".buttons button");
let value = "";

buttons.forEach(btn => {
  btn.onclick = () => {
    const text = btn.textContent;

    if (text === "RESET") {
      value = "";
    } else if (text === "DEL") {
      value = value.slice(0, -1);
    } else if (text === "=") {
      value = eval(value);
    } else {
      value += text;
    }

    screen.textContent = value || "0";
  };
});


let theme = 1;
document.getElementById("themeBtn").onclick = () => {
  if (theme < 3) {
    theme++;
  } else {
    theme = 1;
  }
  document.body.className = "theme-" + theme;
};

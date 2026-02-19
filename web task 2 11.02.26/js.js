    const t = document.getElementById("toggleTheme");
    let lite = false;

    function paint(){
      document.body.classList.toggle("lite", lite);
    }

    t.addEventListener("click", () => {
      lite = !lite;
      paint();
    });
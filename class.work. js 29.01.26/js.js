
 /*   const nameInput = document.getElementById("name");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
btn.addEventListener("click", () => {
    result.textContent = nameInput.value;
});

const username = document.getElementById("username");
const greetbtn = document.getElementById("greetbtn");
const message = document.getElementById("message");
greetBtn.addEventListener("click" , () => {
    message.textContent = "Hello," + username.value + "!"; 
}); */

/*const input = document.getElementById("text");
const btn = document.getElementById("btn");
const output = document.getElementById("output");
btn.addEventListener("click" , () => {
    output.textContent = input.value;
    input.value = "";
});
*/
/*const liveInput = document.getElementById("liveInput");
const preview = document.getElementById("preview")
liveInput.addEventListener("input" , () => {
    preview.textContent = liveInput.value;
})*/

/*const text = document.getElementById("text");
const count = document.getElementById("count")

text.addEventListener("input", () => {
    count.textContent = text.value.lenght;

})*/

/*const input = document.getElementById("input");
const btn = document.getElementById("btn");
input.addEventListener("input" , () => {
    if (input.value === ""){
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
});*/

/*const numInput = document.getElementById("numInput");
const btn = document.getElementById("doubleBtn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  result.textContent = Number(numInput.value) * ;
});
*/

/*const form = document.getElementById("myForm")
const nameInput = document.getElementById("name")
const result = document.getElementById("result")
form.addEventListener("submit",() => {
    event.preventDefault();
    result.textContent = nameInput.value;
});*/

/*const form = document.getElementById("form")
const nameInput = document.getElementById("name")
const result = document.getElementById("result")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (nameInput.value === ""){
        message.textContent = "Name is reguired"
    } else {
        message.textContent = "Form submitted"
    }
});*/

/*const form = document.getElementById("form")
const nameInput = document.getElementById("name")
const ageInput = document.getElementById("age")
const result = document.getElementById("result")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    result.textContent=
    "Name:" + nameInput.value + ", Age" + ageInput.value;
});*/

/*const form = document.getElementById("form")
const input = document.getElementById("input")
const result = document.getElementById("result")
form.addEventListener("submit" ,(e) => {
    e.preventDefault();
    result.textContent = "Submit: " + input.value;
})
BigInt.addEventListener("click", () => {
    console.log("Button clicked")
})*/
/*const agree = document.getElementById("agree")
const result = document.getElementById("result")
agree.addEventListener("change" , () => {
    result.textContent = agree.checked;
});*/

/*const male = document.getElementById("male");
const female = document.getElementById("female");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
btn.addEventListener("click" , () => {
    if(male.checked){
        result.textContent = male.value
    } else {
        result.textContent = female.value
    }
});*/

/*const city = document.getElementById("city");
const result = document.getElementById("result");

city.addEventListener("change", () => {
  result.textContent = city.value;
});
*/

const agree = document.getElementById("agree");
const message = document.getElementById("result");

agree.addEventListener("change", () => {
  if (agree.checked === true) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
});

const radios = document.querySelectorAll('input[name="gender"]');
const result = document.getElementById("result");

radios.forEach(radio => {
  radio.addEventListener("change", () => {
    result.textContent = radio.value;
  });
});




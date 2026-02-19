/*const message = document.getElementById("message");
const btn = document.getElementById("btn");
const StyleBtn= document.getElementById("StyleBtn");
const toggleBtn = document.getElementById("toggleBtn")

btn.addEventListener("click", () =>{
    message.textContent = "Hello! You clicked the button";
});

StyleBtn.addEventListener("click", () => {
  message.style.color="white";
  message.style.background="black";
  message.style.padding="10px";
});

message.style.fontSize="32px";
message.style.border="2px solid red"
message.style.marginRight="20px"

toggleBtn.addEventListener("click", () => {
    if (message.style.display === "none"){
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
});
const title = document.getElementById("title");
const changeBtn = document.getElementById("changeBtn");
changeBtn.addEventListener("click", () => {
    title.textContent = "Hello Bahytzhan! What's happened?";
    title.style.color = "yellow";
    title.style.backgroundColor = "brown";
    title.style.padding = "10px"
    title.style.border = "2px solid black"
    title.style.fontSize = "30px"    
});*/
 /*const text = document.getElementById("text");
 const btn = document.getElementById("btn");

 btn.addEventListener("click", () => {
    text.classList.toggle("hidden")
 })
 */
/*const text = document.getElementById("text");
const sizeBtn =document.getElementById("sizeBtn")

sizeBtn.addEventListener("click", () => {
    text.classList.toggle("big");
}); */
/*const themeBtn = document.getElementById("themeBtn")

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
})*/
/*const themeBtn = document.getElementById("themeBtn")

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
})*/

const text = document.getElementById("text");
const btn = document.getElementById("btn");

btn.addEventListener("click" , () => {
    text.classList.toggle("off");
    text.textContent = "STATUS: ON";
});


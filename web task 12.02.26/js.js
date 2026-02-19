let uploadBox = document.getElementById("uploadBox");
let button = document.getElementById("generateBtn");

uploadBox.addEventListener("click", function() {
    alert("File upload coming soon...");
});

button.addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let github = document.getElementById("github").value;

    if(name === "" || email === "" || github === "") {
        alert("Please fill all fields");
    } else {
        alert("Ticket generated for " + name);
    }
});

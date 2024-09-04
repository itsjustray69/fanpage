const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["#343D3F", "white"];

body.style.backgroundColor = "#343D3F";

button.addEventListener("click", function(){
    const colorIndex = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
});

setTimeout(() => {
window.location.href = "./home.html"}, 15000);
let text = document.getElementById("load");
setTimeout(() => {
text.style.color = "white";
}, 4000);
setTimeout(() => {
text.style.color = "black";
}, 3000);
setTimeout(() => {
text.style.color = "black";
}, 7000);
setTimeout(() => {
text.style.color = "white";
text.textContent= 'Opening server...';
}, 8000);
setTimeout(() => {
text.style.color = "white";
text.textContent= 'version: 1.01';
}, 10000);


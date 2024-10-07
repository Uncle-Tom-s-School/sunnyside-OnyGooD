var button = document.getElementById("menu");

button.style.opacity = 1;

button.addEventListener("click", function() {
    if (button.style.opacity === "0.5") {
        button.style.opacity = 1;
    } else {
        button.style.opacity = 0.5;
    }
});

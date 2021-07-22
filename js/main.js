const contactButton = document.querySelector("#contact-button");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".close");
const emailButton = document.querySelector(".email");

contactButton.addEventListener("click", function() {
    if (popup.classList.contains("hide")) {
        popup.classList.remove("hide");
    } return;
});

emailButton.addEventListener("click", function() {
    if (popup.classList.contains("hide")) {
        popup.classList.remove("hide");
    } return;
});

closeButton.addEventListener("click", function() {
    if (popup.classList.contains("hide")) {
    } else popup.classList.add("hide")
    return;
});

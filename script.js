let burger = document.querySelector(".none")
let Xmark = document.querySelector(".none_")
let Menu = document.querySelector(".headerNav")

burger.addEventListener("click", ()=> {
    Menu.style.left = "0";
    Xmark.style.display = "block";
    burger.style.display = "none";
} )

Xmark.addEventListener("click", ()=> {
    Menu.style.left = "-100%";
    Xmark.style.display = "none";
    burger.style.display = "block";
} )
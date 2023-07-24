
const value = document.querySelector("#bar");
const closebtn = document.querySelector(".closebtn");
const sidebar = document.querySelector(".container");

sidebar.classList.add("jj")

value.addEventListener("click", function () {
    sidebar.classList.remove("jj")
});

closebtn.addEventListener("click", function () {
    sidebar.classList.add("jj")
});
var cont = document.getElementsByClassName("container");
var i;

for (i = 0; i < cont.length; i++) {
    cont[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var answer = this.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
}
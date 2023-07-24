var modal = document.getElementById("myModal");


var content = document.getElementById("btn");
var modalContent = document.getElementById("modalHeader");
var captionText = document.getElementById("caption");
content.onclick = function () {
    modal.style.display = "block";
    modalHeader.src = this.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
    imageSection.style.opacity = 1;
}

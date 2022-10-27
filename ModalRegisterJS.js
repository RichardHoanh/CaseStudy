var modal1 = document.getElementById("ModalRegister");
var btn1 = document.getElementById("register");
var span1 = document.getElementsByClassName("close2")[0];

btn1.onclick = function () {
    modal1.style.display = "block";
}
span1.onclick = function () {
    modal1.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
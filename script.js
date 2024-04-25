// Seleccionamos el botón por su clase
var botonGithub = document.querySelector(".btn-github");

// Agregamos un evento de clic al botón
botonGithub.addEventListener("click", function() {
    window.open("https://github.com", "_blank"); // Abre GitHub en una nueva pestaña
});


var botonLinkedin = document.querySelector(".btn-linkedin");

botonLinkedin.addEventListener("click", function() {
    window.open("https://mx.linkedin.com/", "_blank"); 
});

var botonCurriculum = document.querySelector(".btn-curriculum");

botonCurriculum.addEventListener("click", function() {
    window.open("https://google.com", "_blank"); 
});
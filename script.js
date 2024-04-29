// Seleccionamos el botón por su clase
var botonGithub = document.querySelector(".btn-github");

// Agregamos un evento de clic al botón
botonGithub.addEventListener("click", function() {
    window.open("https://github.com/gabslr", "_blank"); // Abre GitHub en una nueva pestaña
});


var botonLinkedin = document.querySelector(".btn-linkedin");

botonLinkedin.addEventListener("click", function() {
    window.open("https://mx.linkedin.com/", "_blank"); 
});

var botonCurriculum = document.querySelector(".btn-curriculum");

botonCurriculum.addEventListener("click", function() {
    window.open("https://google.com", "_blank"); 
});



var btnSobremi = document.getElementById("btn-sobremi");
btnSobremi.addEventListener("click", function() {
    var seccionDestino = document.getElementById("destino-sobremi");
    seccionDestino.scrollIntoView({ behavior: "smooth" });
});

var btnSkills = document.getElementById("btn-skills");
btnSkills.addEventListener("click", function() {
    var seccionDestino = document.getElementById("destino-skills");
    seccionDestino.scrollIntoView({ behavior: "smooth" });
});

var btnHobbies = document.getElementById("btn-hobbies");
btnHobbies.addEventListener("click", function() {
    var seccionDestino = document.getElementById("destino-hobbies");
    seccionDestino.scrollIntoView({ behavior: "smooth" });
});

var btnFormacion = document.getElementById("btn-formacion");
btnFormacion.addEventListener("click", function() {
    var seccionDestino = document.getElementById("destino-formacion");
    seccionDestino.scrollIntoView({ behavior: "smooth" });
});

var btnProyectos = document.getElementById("btn-proyectos");
btnProyectos.addEventListener("click", function() {
    var seccionDestino = document.getElementById("destino-proyectos");
    seccionDestino.scrollIntoView({ behavior: "smooth" });
});








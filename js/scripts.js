const fecha = document.querySelector('.fecha');
fecha.textContent = new Date().toLocaleDateString('es-CL');

const boton = document.getElementById("btnEnviar");
const campo = document.getElementById("mensaje");
/*
boton.onclick = function() {
    alert("Mensaje enviado");
    campo.value = "";
    */

boton.addEventListener("click",function(){
    alert("Mensaje enviado");
});
//document.getElementById("prueba").innerHTML="<h1>Hola</h1>"
//document.getElementById("prueba1").textContent="<h1>Hola</h1>"

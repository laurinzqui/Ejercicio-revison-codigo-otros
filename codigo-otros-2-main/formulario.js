var formulario = document.querySelector(".formulario")

formulario.onsubmit = function(e) {

  e.preventDefault();//Se añade un default a prevent
  
  var n = formulario.elements[0]
  var ed = formulario.elements[1]//Se le reasgina nombre a la variable 
  var na = formulario.elements[2]

  var nombre = n.value
  var edad = ed.value

  var i = na.selectedIndex
  var helado = na.options[i].value
  console.log(nombre, edad);
  console.log(helado);

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    ed.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarHelado(nombre, edad, helado)
  }
}


/*var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar" Se comenta este boton porque existe uno abajo con la misma funcion*/
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
//document.body.appendChild(botonBorrar); 

function agregarHelado(nombre, edad, helado) {

  if (nacionalidad === "limon") {
    nacionalidad = "limon"
  }
  else if (nacionalidad === "fresa") {
    nacionalidad = "fresa"
  }
  else if (nacionalidad === "frambuesa") {
    nacionalidad = "frambuesa"
  }
  else if (nacionalidad === "vainilla") {
    nacionalidad = "vainilla"
  }
  
//Se cambia acomodo entre venezolana y peruana
var lista = document.getElementById("lista-helados");

var elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista");//se corrige"ed" a ".add"
lista.appendChild(elementoLista);

var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
/*spanNombre.textContent = "Nombre: "
inputNombre.value = nombre .Se comenta para que no retorne dos veces nombre*/
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Helado", nacionalidad);


var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar helado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove();
  }
}

//Se agregaron ";" al termino de cada ()
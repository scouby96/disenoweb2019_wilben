//selectonnar la etiqueta
var titulo=document.querySelector("h1");
console.log(titulo);
//registrar el evento al elemento
titulo.addEventListener("click",function(){
    open("https://www.google.com/?hl=fr");
});
/* selecionnar el elemento*/
var parrafomostrar=document.querySelector("p#mostrar");
var divcontenido=document.querySelector("#contenido");
console.log(parrafomostrar);
console.log(divcontenido);


// registrar el evento 
parrafomostrar.addEventListener("click",function(){
    divcontenido.style.display="none";
    var nombre=prompt("say yur name");
    //   document.write(`<p>${nombre<p>`});
    divcontenido.textContent=nombre;
});



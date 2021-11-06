"use strict"

let datos = [
    
]



function agregarElemento(){
    
    let dato = document.getElementById("dato").value
    if(dato==""){

    }else{
    document.getElementById("dato").value ="";
    datos.push(dato)
    imprimir();
    }
}

function eliminar(){
    datos.pop();
    imprimir();
}

function eliminarPorItem(dato){
    let pos = datos.indexOf(dato.innerHTML)
    datos.splice(pos,1);
    imprimir();
}


function imprimir(){
    let texto = "";
    for(let dato of datos){
        texto += `<div class="containerli"><li class="li">${dato}</li><button class="btn-del" onclick="eliminarPorItem(this)">Completado!</button></div>`;
    }
    document.getElementById("ul").innerHTML = texto;
}






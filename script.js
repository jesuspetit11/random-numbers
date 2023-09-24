window.onload = inicio;
let sumaCorrecta;

function inicio() {
    //En esta función van todos los eventos que existan
    preguntar();
    document.querySelector("button").onclick = comprobar;
}

function preguntar() {
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);
    sumaCorrecta = a + b;
    document.querySelector(".uno").value = a;
    document.querySelector(".dos").value = b;
    document.querySelector(".tres").value = "";
    document.querySelector(".tres").focus();
}

function comprobar() {
    let c = Number(document.querySelector(".tres").value);
    if( c === sumaCorrecta){
        document.querySelector(".resultados").innerHTML = "Es correcto!"
    } else {
        document.querySelector(".resultados").innerHTML = "No es correcto!"
    }
}
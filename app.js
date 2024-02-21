const textoHTML = document.querySelector(".campo-texto");
const munecoHTML = document.querySelector(".imagen-muneco");
const boxTituloHTML = document.querySelector(".box-titulo");
const boxSubtituloHTML = document.querySelector(".box-subtitulo");
const desencriptarHTML = document.querySelector(".box-desencripta");
const botonEncriptar = document.querySelector(".encriptar");
const botonDesencriptar = document.querySelector(".desencriptar");
const botonCopiar = document.querySelector(".copiar");
const warning = document.querySelector(".warning");
let validador = false;


let matriz_encriptado = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
];

textoHTML.addEventListener('input', function(){
    if (textoHTML.value.trim() === '') {
        desencriptarHTML.textContent = "";
        boxTituloHTML.textContent = "Ningún mensaje fue encontrado";
        boxSubtituloHTML.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        munecoHTML.style.display = 'block';
        botonCopiar.style.border="none";
        botonCopiar.style.background = "transparent";
        botonCopiar.style.color = "transparent";
    }
});


function encriptar(){
    let textoVar = textoHTML.value;

    for (let i=0;i<textoHTML.value.length;i++){
        if (
            (textoHTML.value[i]=="á" || textoHTML.value[i]=="é" || textoHTML.value[i]=="í" || textoHTML.value[i]=="ó" || textoHTML.value[i]=="ú") || 
            (textoHTML.value[i] === textoHTML.value[i].toUpperCase() && textoHTML.value[i].toUpperCase() !== textoHTML.value[i].toLowerCase())){
            warning.style.color = "red";
            warning.classList.add("modified");

            warning.style.fontSize= "20px";
            warning.style.marginTop = "5em"
            desencriptarHTML.textContent = "";
            boxTituloHTML.textContent = "Ningún mensaje fue encontrado";
            boxSubtituloHTML.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
            munecoHTML.style.display = 'block';
            botonCopiar.style.border="none";
            botonCopiar.style.background = "transparent";
            botonCopiar.style.color = "transparent";
            validador = true;
            break;
        }
        else {
            warning.classList.remove("modified");
            warning.style.margin =" 8em 2em 2em 2em";
            warning.style.color="#495057";
            warning.style.fontSize=" 14px";
            validador = false;
        }
    }

    if (validador == false){
        for (let i=0;i<matriz_encriptado.length;i++){
            if(textoHTML.value.includes(matriz_encriptado[i][0])){
                textoHTML.value = textoHTML.value.replaceAll(matriz_encriptado[i][0],matriz_encriptado[i][1]);
            }
        }
        boxTituloHTML.textContent = "";
        boxSubtituloHTML.textContent = "";
        munecoHTML.style.display="none";
        desencriptarHTML.textContent = textoHTML.value;
        textoHTML.value = textoVar;
        botonCopiar.style.border="0.1em solid #0A3871";
        botonCopiar.style.background = "white";
        botonCopiar.style.color = "#0A3871";
    }
}

function copiar(){
    navigator.clipboard.writeText(desencriptarHTML.textContent);
}

function desencriptar(){
    let textoVar = textoHTML.value;

    for (let i=0;i<textoHTML.value.length;i++){
        if (
            (textoHTML.value[i]=="á" || textoHTML.value[i]=="é" || textoHTML.value[i]=="í" || textoHTML.value[i]=="ó" || textoHTML.value[i]=="ú") || 
            (textoHTML.value[i] === textoHTML.value[i].toUpperCase() && textoHTML.value[i].toUpperCase() !== textoHTML.value[i].toLowerCase())){
            warning.style.color = "red";
            warning.classList.add("modified");

            warning.style.fontSize= "20px";
            warning.style.marginTop = "5em"
            desencriptarHTML.textContent = "";
            boxTituloHTML.textContent = "Ningún mensaje fue encontrado";
            boxSubtituloHTML.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
            munecoHTML.style.display = 'block';
            botonCopiar.style.border="none";
            botonCopiar.style.background = "transparent";
            botonCopiar.style.color = "transparent";
            validador = true;
            break;
        }
        else {
            warning.classList.remove("modified");
            warning.style.margin =" 8em 2em 2em 2em";
            warning.style.color="#495057";
            warning.style.fontSize=" 14px";
            validador = false;
        }
    }

    if (validador==false){
        for (let i=0;i<matriz_encriptado.length;i++){
            if(textoHTML.value.includes(matriz_encriptado[i][1])){
                textoHTML.value = textoHTML.value.replaceAll(matriz_encriptado[i][1],matriz_encriptado[i][0]);
            }
        }
        boxTituloHTML.textContent = "";
        boxSubtituloHTML.textContent = "";
        munecoHTML.style.display="none";
        botonCopiar.style.border="0.1em solid #0A3871";
        botonCopiar.style.background = "white";
        botonCopiar.style.color = "#0A3871";
        desencriptarHTML.textContent = textoHTML.value;
        textoHTML.value = textoVar;
    }
}
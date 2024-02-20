lista=[];

function encriptar(){
    let textoHTML = document.querySelector(".campo-texto").value;
    let munecoHTML = document.querySelector(".imagen-muneco");
    let boxTituloHTML = document.querySelector(".box-titulo");
    let boxSubtituloHTML = document.querySelector(".box-subtitulo");
    let desencriptarHTML = document.querySelector(".box-desencripta");
    
    lista=textoHTML.split('');
    for (let i=0;i<lista.length;i++){
        switch(lista[i]){
            case 'a': lista[i]='ai';    break;
            case 'e': lista[i]='enter'; break;
            case 'i': lista[i]='imes';  break;
            case 'o': lista[i]='ober';  break;
            case 'u': lista[i]='ufat';  break;
            default:  break;
        }
    }


    
    textoHTML=lista.join('');
    
    desencriptarHTML.textContent = textoHTML;
    
    
    boxTituloHTML.textContent = "";
    boxSubtituloHTML.textContent = "";
    //munecoHTML.style.display = "none";

} 

/*
function desencriptar(){
}*/
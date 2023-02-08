const textArea = document.querySelector(".encryptor-textarea");
const message = document.querySelector(".decryptor-textarea");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function btnEncriptar(){
    if(textArea.value != ""){
        const textoEncriptado = encriptar(textArea.value);
        message.value = textoEncriptado;
        textArea.value = "";
        message.style.backgroundImage = "none";

        document.querySelector(".no-message").style.display = "none";
        document.querySelector(".insert-text").style.display = "none";
    }
    

}

function btnDesencriptar (){
    if(textArea.value != ""){
        const textoDesencriptado = desencriptar(textArea.value);
        message.value = textoDesencriptado;
        textArea.value = "";
        message.style.backgroundImage = "none";
        document.querySelector(".no-message").style.display = "none";
        document.querySelector(".insert-text").style.display = "none";
    }
    
}
function btnCopiar (){
    message.select();
    document.execCommand('copy');
    alert("texto copiado");
}

function encriptar (stringEncriptada) {
    let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();


    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);

        }

    }
    return stringEncriptada;
}

function desencriptar (stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();


    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);

        }

    }
    return stringDesencriptada;
}
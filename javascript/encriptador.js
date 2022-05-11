const inputTexto = document.querySelector(".inputTexto");
const message = document.querySelector(".inputText2");
const seccionError = document.querySelector(".seccionError");
const botonCopiar = document.querySelector(".botonCopiar");

function btnEncriptador() {
    if (inputTexto.value == "") {
        message.style.display = "none";
        seccionError.style.display = "flex";
        botonCopiar.style.display = "none"
    } else if (message.value == true) {
        message.value = "";
    } else {
        seccionError.style.display = "none";
        message.style.display = "flex";
        botonCopiar.style.display = "block";
        const messageEncriptado = encriptar(inputTexto.value);
        message.value = messageEncriptado;
    }
}
function encriptar(textoAEncriptar) {
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoAEncriptar = textoAEncriptar.toLowerCase();
    for (let i = 0; i < matriz.length; i++) {
        if (textoAEncriptar.includes(matriz[i][0])) {
            textoAEncriptar = textoAEncriptar.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }
    return textoAEncriptar;
}




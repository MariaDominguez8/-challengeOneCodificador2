const inputText2 = document.querySelector(".inputText2");

function btnDesencriptador() {
    const messageEncriptado = desencriptar(inputText2.value);
    const message = inputText2;
    message.value = messageEncriptado;
}
function desencriptar(textoADesencriptar) {
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoADesencriptar = textoADesencriptar.toLowerCase();
    for (let i = 0; i < matriz.length; i++) {
        if (textoADesencriptar.includes(matriz[i][1])) {
            textoADesencriptar = textoADesencriptar.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }
    return textoADesencriptar;
}
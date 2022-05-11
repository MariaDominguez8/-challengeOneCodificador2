const btnCopiar = document.querySelector('.botonCopiar');
const input = document.querySelector('.inputText2');
const messageCopied = document.querySelector('.messageCopied');


function copiarTexto() {
    input.focus();
    document.execCommand('selectAll'); // selecciona todo el texto que contenga el elemento.
    document.execCommand('copy'); // copia

    messageCopied.innerHTML = "Copiado al portapapeles"
    setTimeout(() => messageCopied.innerHTML = "", 3000); //el mensaje desaparece después de 3 segundos.
}

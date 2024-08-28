// Função para criptografar o texto
function criptografarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Função para descriptografar o texto
function descriptografarTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

document.getElementById('criptografar').addEventListener('click', function() {
    let entrada = document.getElementById('entrada').value.toLowerCase();
    let resultado = criptografarTexto(entrada);
    
    document.getElementById('imagem-placeholder').style.display = 'none';
    let textoResultado = document.getElementById('texto-resultado');
    textoResultado.textContent = resultado;
    textoResultado.style.display = 'block';
});

document.getElementById('descriptografar').addEventListener('click', function() {
    let entrada = document.getElementById('entrada').value.toLowerCase();
    let resultado = descriptografarTexto(entrada);
    
    document.getElementById('imagem-placeholder').style.display = 'none';
    let textoResultado = document.getElementById('texto-resultado');
    textoResultado.textContent = resultado;
    textoResultado.style.display = 'block';
});

var textInput = document.querySelector("#texto__mensagem");
var outInput = document.querySelector("#mensagem");

function criptografar(){
  var texto = textInput.value;
  
  var resultCripto = texto.replace(/a/g, "asmei")
  .replace(/e/g, "esmola")
  .replace(/i/g, "ismailove")
  .replace(/o/g, "osmarido")
  .replace(/u/g, "usmologado")
  
  document.getElementById('mensagem').innerHTML = '<textarea readonly id="texto__mensagem" class="textoCopiar">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){
    var texto = textInput.value;

    var resultDescripto = texto.replace(/asmei/g, "a")
    .replace(/esmola/g, "e")
    .replace(/ismailove/g, "i")
    .replace(/osmarido/g, "o")
    .replace(/usmologado/g, "u");
  
    document.getElementById('mensagem').innerHTML = '<textarea readonly id="texto__mensagem" class="textoCopiar">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop = document.getElementById('texto__mensagem');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}  
const inputText = document.querySelector(".input-text");
const mensagem = document.querySelector(".mensagem");

function btEncriptar() {
  if (inputText.value === "") {
    window.alert("Campo de texto está vazio");
    mensagem.style.backgroundImage = url("./image/image.png");
  }
  const textoEncriptado = encriptar(inputText.value);
  mensagem.value = textoEncriptado;
  mensagem.style.backgroundImage = "none";
}
function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

/////// DESENCRIPTADOR//////////////
function btDesencriptar() {
  if (inputText.value === "") {
    window.alert("O Campo de texto está vazio");
    mensagem.style.backgroundImage = url("./image/image.png");
  }
  const textoDescriptado = Descriptografar(inputText.value);
  mensagem.value = textoDescriptado;
  mensagem.style.backgroundImage = "none";
}

function Descriptografar(stringDescriptada) {
  let matrizCodigo = [
    ["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"],
  ];
  stringDescriptada = stringDescriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDescriptada.includes(matrizCodigo[i][0])) {
      stringDescriptada = stringDescriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringDescriptada;
}
////////////BOTÃO COPIAR/////////////////
function copy() {
  const content = document.getElementById("input-mensage");
  content.select();
  content.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("copiado");
  document.querySelector(".mensagem").value = "";
  document.querySelector(".input-text").value = "";
}

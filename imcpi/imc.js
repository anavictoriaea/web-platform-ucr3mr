function imc() {
  var peso = parseFloat(document.formImc.peso.value);
  var altura = parseFloat(document.formImc.altura.value);
  
  if (peso <= 0 | altura <= 0){
    alert("Digite os dados corretamente.")
  } else {
    var imc = peso/(altura*altura);

    if (imc < 16) {
      document.getElementById("resultado").textContent = "Seu IMC é " + imc.toFixed(2) + ". Seu grau de obesidade é Magreza Grave.";
    } else if (imc < 17) {
      document.getElementById("resultado").textContent = "Seu IMC é " + imc.toFixed(2) + ". Seu grau de obesidade é Magreza Moderada.";
    } else if (imc < 18.5) {
      document.getElementById("resultado").textContent = "Seu IMC é " + imc.toFixed(2) + ". Seu grau de obesidade é Magreza Leve.";
    } else if (imc < 25) {
      document.getElementById("resultado").textContent = "Seu IMC é " + imc.toFixed(2) + ". Seu grau de obesidade é Saudável.";
    } else if (imc < 30) {
      document.getElementById("resultado").textContent = "Seu IMC é " + imc.toFixed(2) + ". Seu grau de obesidade é Sobrepeso.";
    } else if (imc < 35) {
      document.getElementById("resultado").textContent = "Seu IMC é " + imc.toFixed(2) + ". Seu grau de obesidade é Obesidade grau I.";
    } else if (imc < 40) {
      document.getElementById("resultado").textContent = "Seu IMC é " + imc.toFixed(2) + ". Seu grau de obesidade é Obesidade grau II - Severa.";
    } else {
      document.getElementById("resultado").textContent = "Seu IMC é " + imc.toFixed(2) + ". Seu grau de obesidade é Obesidade grau III - Mórbida.";
    }
  }
}

function pesoideal() {
  var altura = parseFloat(document.formPI.altura.value);
  var sexo = document.formPI.sexo.value;

  if (altura <= 0) {
    alert("Digite a altura novamente.");
  } else if (sexo == "feminino") {
      var pesoi = (62.1 * altura) - 44.7;
      document.getElementById("resultado").textContent = "Seu peso ideal é " + pesoi.toFixed(2) +" kg."
  } else if (sexo == "masculino") {
    var pesoi = (72.7 * altura) - 58;
      document.getElementById("resultado").textContent = "Seu peso ideal é " + pesoi.toFixed(2) +" kg."
  } else {
    alert("Selecione um sexo.")
  }
}
function pesoideal() {
  var altura = parseFloat(document.formPI.altura);
  var sexof = document.formPI.feminino;
  var sexom = document.formPI.masculino;

  if (altura <= 0) {
    alert("Digite a altura novamente.");
  } else if (sexof == true) {
    if (sexom == true) {
      alert("Selecione apenas um sexo.")
    } else {
      var pesoi = (62.1 * altura) - 44.7;
      document.getElementById("resultado").textContent = "Seu peso ideal é " + pesoi.toFixed(2) +" kg."
    }
  } else if (sexom == true) {
    var pesoi = (72.7 * altura) - 58;
      document.getElementById("resultado").textContent = "Seu peso ideal é " + pesoi.toFixed(2) +" kg."
  } else {
    alert("Selecione um sexo.")
  }
}
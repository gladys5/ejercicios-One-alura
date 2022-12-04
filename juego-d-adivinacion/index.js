function imprimir(frase) {
  document.write(frase)
}

function juego() {
  var numeroPensado = Math.round(Math.random() * 10)
  console.log(numeroPensado)
  var intentos = 3
  var contador = 1

  while (contador <= intentos) {
    var numeroLanzado = parseInt(prompt("Ingrese un número entre 0-10"))
    if (numeroPensado == numeroLanzado) {
      alert(
        "usted acertó, en el intento " +
          contador +
          " el número pensado era " +
          numeroPensado
      )
      break
    } else {
      alert("usted erró")
    }
    contador++
  }
  if (numeroPensado == numeroLanzado) {
    imprimir(
      "usted acertó, en el intento " +
        contador +
        " el número pensado era " +
        numeroPensado
    )
  } else {
    imprimir("usted erró, el número pensado era " + numeroPensado)
  }
  imprimir("fin")
}
juego()

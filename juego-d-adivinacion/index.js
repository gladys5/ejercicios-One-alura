function imprimir(frase) {
  document.write(frase)
}

function juego() {
  let numeroPensado = Math.round(Math.random() * 10)
  console.log(numeroPensado)
  let intentos = 3
  let contador = 1

  while (contador <= intentos) {
    let numeroLanzado = parseInt(prompt("Ingrese un número entre 0-10"))
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

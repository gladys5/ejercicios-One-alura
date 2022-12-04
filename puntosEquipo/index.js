function saltarLinea() {
  document.write("<br>")
  document.write("<br>")
  document.write("<br>")
}

function imprimir(frase) {
  document.write(frase)
  saltarLinea()
}

let victorias = parseInt(prompt("Informe la cantidad de victorias"))
let empates = parseInt(prompt("Informe la cantidad de empates"))

let puntosTotal = victorias * 3 + empates

imprimir("El total de puntos del equipo es: " + puntosTotal)

if (puntosTotal > 28) {
  imprimir("El equipo está mejor que el año pasado")
}

if (puntosTotal < 28) {
  imprimir("El equipo está peor que el año pasado")
}

if (puntosTotal == 28) {
  imprimir("El equipo está igual que el año pasado")
}

function saltarLinea() {
  document.write("<br>")
}
function imprimir(frase) {
  saltarLinea()
  document.write(frase)
}
function estrellas() {
  for (let lineas = 1; lineas <= 3; lineas++) {
    for (let columnas = 1; columnas <= 10; columnas++) {
      document.write("*")
    }
    saltarLinea()
  }
  imprimir("fin")
}
estrellas()

function saltarLinea() {
  document.write("<br>")
}
function imprimir(frase) {
  document.write(frase)
}
let numero = parseInt(prompt("ingrese la tabla"))
function tablas() {
  let multiplicador = 1
  while (multiplicador <= 10) {
    imprimir(`
       ${numero} X ${multiplicador} = ${numero * multiplicador} `)
    multiplicador++
    saltarLinea()
  }
}
tablas()

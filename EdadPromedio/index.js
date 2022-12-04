function saltarLinea() {
  document.write("<br>")
}
function imprimir(frase) {
  saltarLinea()
  document.write(frase)
}
let numeroDmiembros = parseInt(
  prompt("ingrese la cantidad de miembros de su familia")
)
function media() {
  let contador = 1
  let totalEdades = 0
  while (contador <= numeroDmiembros) {
    let edades = parseInt(prompt("ingrese la edad de el familiar"))

    totalEdades = totalEdades + edades
    contador++
  }

  let promedio = Math.round(totalEdades / numeroDmiembros)
  imprimir(`el promedio de edades es ${promedio}`)
}
media()

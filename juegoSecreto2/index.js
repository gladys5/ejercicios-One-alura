function aleatorio() {
  return Math.round(Math.random() * 10)
}
function sortear(cantidad) {
  let secretos = []
  let contador = 1
  while (contador <= cantidad) {
    let numeroAleatorio = aleatorio()
    console.log(numeroAleatorio)
    let encontrado = false
    if (numeroAleatorio != 0) {
      for (let posicion = 0; posicion < secretos.length.length; posicion++) {
        if (numeroAleatorio == secreto[posicion]) {
          encontrado = true
          break
        }
      }
      if (encontrado == false) {
        secretos.push(numeroAleatorio)
        contador++
      }
    }
  }
  return secretos
}
let button = document.querySelector("button")
button.onclick = sortear

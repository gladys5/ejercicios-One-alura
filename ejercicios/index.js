//imprime todos los números pares del 1 al 100 y al final imprime la palabra "FIN".
function saltarLinea() {
  document.write("<br>")
}
function imprimir(frase) {
  saltarLinea()
  document.write(frase)
}
// let numero = parseInt(prompt("ingresa un numero"))
// let cantidad = 0
// while (cantidad <= 100) {
//   cantidad++
//   numero = numero + 2
//   imprimir(numero)
// }
//-------------------------------------------------------------------------------------
// crea un codigo para que el usuario tenga 3 intentos de inicio de sesión. Atención: si lo hace bien en el primer intento, no tiene sentido seguir preguntando por su nombre de usuario y contraseña.
// let inicioDeSesionRegistrado = "alura"
// let contrasenhaRegistrada = "alura321"

// let maximoIntentos = 4
// let intentoActual = 1

// while (intentoActual <= maximoIntentos) {
//   let inicioDeSesionIngresado = prompt("Ingrese su usuario")
//   let contrasenhaIngresada = prompt("Ingrese su contraseña")

//   if (
//     inicioDeSesionRegistrado == inicioDeSesionIngresado &&
//     contrasenhaRegistrada == contrasenhaIngresada
//   ) {
//     alert("Bienvenido al sistema" + inicioDeSesionIngresado)
//     intentoActual = maximoIntentos // Lo hice bien, así que paso todos los intentos que falten y salgo del loop. Allá abajo aumentará +1!
//   } else {
//     if (intentoActual == 4) {
//       alert("Agotaste el número permitido de intentos!")
//     } else {
//       alert("Inicio de sesión inválido. Favor intente de nuevo")
//     }
//   }

//   // vaya al próximo intento
//   intentoActual = intentoActual + 1
// }
//-------------------------------------------------------------------------------------------------
//Carla estaba ayudando a sus colegas a prepararse para la próxima prueba de lógica de la programación. Le pidieron que resolviera la siguiente pregunta que tenía probabilidad de aparecer en la prueba: "lee del mundo HTML un texto escrito por el usuario, y con el clic de un botón muestra lo que se escribió".

function mostrarTexto() {
  let texto = document.querySelector("input")
  alert(texto.value)
}
let button = document.querySelector("button")
button.onclick = mostrarTexto

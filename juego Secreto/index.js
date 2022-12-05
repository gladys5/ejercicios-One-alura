let secreto = Math.round(Math.random() * 10)
let input = document.querySelector("input")
input.focus()
function verificar() {
  if (input.value == secreto) {
    alert("usted acerto")
  } else {
    alert("Lo siento te equivocaste")
  }
  input.value = ""
  input.focus()
}
let button = document.querySelector("button")
button.onclick = verificar

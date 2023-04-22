// the exclamation mark tells to typescript that you the developer know that this button exists or that this operation will yield
// a non null value
const button = document.querySelector('button')!;

function suma(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

function clickHandler(message: string) {
  console.log("Clicked! " + message);
}

//Validate that the button is not null or undefined - se debe utilizar el exclamation mark o el método de check con el if, no ambos
if (button) {
  button.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
}

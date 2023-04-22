// the exclamation mark tells to typescript that you the developer know that this button exists or that this operation will yield
// a non null value
const button1 = document.querySelector("button")!;

//Validate that the button is not null or undefined - se debe utilizar el exclamation mark o el método de check con el if, no ambos
if (button1) {
  button.addEventListener("click", () => {
    console.log("clicked!");
  });
}
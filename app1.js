//definimos las variables que vamos a usar para la ejecucion
const barraLateral = document.querySelector(".barraLateral");
const btn = document.querySelector(".bx");
//creamos la funcion click que al darle al boton menu nos va a desplegar una barra lateral y si damos click en una parte de la pantalla diferente a la barra o al menu se va a ocultar el menu
btn.addEventListener("click", () => {
  barraLateral.classList.add("spread");
  window.addEventListener("click", (e) => {
    if (
      barraLateral.classList.contains("spread") &&
      e.target != barraLateral &&
      e.target != btn
    ) {
      barraLateral.classList.toggle("spread");
    }
  });
});

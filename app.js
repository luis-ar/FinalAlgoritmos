//creamos un arreglo donde se van a almacenar los numeros ingresados por teclado
var numbers = [];
//creamos las variables que vamos a utilizar en la ejecucion del programa
const reiniciar = document.querySelector(".reiniciar");
const ordenar = document.querySelector(".ordenar");
const agregar = document.querySelector(".agregar");

// creamos la función para agregar un número ingresado a la lista, dicho numero se recibe desde el teclado
function addNumber() {
  //se define el input donde se ingreso el valor
  var numberInput = document.getElementById("number-input");
  //el valor lo conertimos a un numero
  var number = parseInt(numberInput.value);
  //evaluamos que haya ingresado un valor
  if (!isNaN(number)) {
    numbers.push(number);
    numberInput.value = "";
    numberInput.focus();
    displayNumbers();
  }
}

// creamos la función para ordenar la lista de números utilizando el método de burbuja
function bubbleSort(arr) {
  //creamos la variable len que su valor es la longitud del arreglo arr que se pasa como parrametro en la funcion
  var len = arr.length;
  var swapped;

  do {
    swapped = false;
    for (var i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

// Función para mostrar los números en el elemento de salida
function displayNumbers() {
  //creamos la variable donde se va a mostrar los elementos que se estan ingresando por teclado
  var outputDiv = document.getElementById("output");
  outputDiv.style.display = "flex";
  outputDiv.innerHTML = "Lista actual: " + numbers.join(", ");
}

// Función para ordenar los números y mostrar el resultado
function sortNumbers() {
  //pasamos el arreglo numbers a la funcion bubblesort para que lo arregle con el metodo burbuja, despues nos dar el arreglo ordenado y lo almacenamos en la variable sortedNumbers

  var sortedNumbers = bubbleSort(numbers);

  var outputDiv = document.getElementById("output1");
  outputDiv.style.display = "flex";
  //luego imprimimos la lista ordenada en pantall
  outputDiv.innerHTML += "Lista ordenada: " + sortedNumbers.join(", ");
  reiniciar.style.display = "inline";
  ordenar.style.display = "none";
  agregar.style.display = "none";
}

//funcion para reiniciar la pagina y poder ingresar nuevos numeros
reiniciar.addEventListener("click", () => {
  location.reload();
});

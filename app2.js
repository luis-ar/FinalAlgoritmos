//definimos las variables que vamos a usar para la ejecucion
const txtcodigo = document.querySelector("#codigo");
const txtnombre = document.querySelector("#nombre");
const txtapellido = document.querySelector("#apellido");
const txtcorreo = document.querySelector("#email");
const guardar = document.querySelector("#boton-guardar");
const actualizar = document.querySelector("#boton-actualizar");
const eliminarbtn = document.querySelector("#boton-eliminar");
const consultar = document.querySelector("#boton-consultar");
const llenarDatos = document.querySelector(".llenar-datos");
// se crea una clase con el nombre Nodo
class Nodo {
  // se crea un constructor que recibe los parametros codigo,nombre,apellido y correo

  constructor(codigo, nombre, apellido, correo) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.siguiente = null;
    this.anterior = null;
  }
}
//luego se crea un nueva clase con el nombre ListaEnlazadaDoble
class ListaEnlazadaDoble {
  //se crea un constructor
  constructor() {
    this.cabeza = null;
    this.longitud = 0;
  }
  // se crea la funcion agregar que recibe los parametros codigo,nombre,apellido y correo
  agregar(codigo, nombre, apellido, correo) {
    //con los parametros recibidoa se pasa como parametros a la clase de Nodo, y se crea un nuevo objeto
    const nodo = new Nodo(codigo, nombre, apellido, correo);
    if (this.cabeza === null) {
      this.cabeza = nodo;
    } else {
      let nodoActual = this.cabeza;
      while (nodoActual.siguiente !== null) {
        nodoActual = nodoActual.siguiente;
      }
      nodoActual.siguiente = nodo;
      nodo.anterior = nodoActual;
    }
    this.longitud++;
  }

  //Se crea una funcion con el nombre buscar que recibe como parametro el codigo que se introduce por consola
  //luego me retorna la informacion relacionado al codigo introducido
  buscar(codigo) {
    let nodoActual = this.cabeza;
    while (nodoActual !== null) {
      if (nodoActual.codigo === codigo) {
        return nodoActual;
      }
      nodoActual = nodoActual.siguiente;
    }
    return null;
  }
  //se crea el metodo actualizar que recibe como parametro el codgo, nombre, apellido y correo
  //despues se busca con el codigo los valores que o enlazan para despues actualizarlo con los nuevos valores
  actualizar(codigo, nombre, apellido, correo) {
    const nodo = this.buscar(codigo);
    if (nodo !== null) {
      nodo.nombre = nombre;
      nodo.apellido = apellido;
      nodo.correo = correo;
    }
  }
  //se crea el metodo eliminar que recibe como parametro el codigo que elimina al objeto de la lista
  eliminar(codigo) {
    let nodoActual = this.cabeza;
    while (nodoActual !== null) {
      if (nodoActual.codigo === codigo) {
        if (nodoActual.anterior !== null) {
          nodoActual.anterior.siguiente = nodoActual.siguiente;
        } else {
          this.cabeza = nodoActual.siguiente;
        }
        if (nodoActual.siguiente !== null) {
          nodoActual.siguiente.anterior = nodoActual.anterior;
        }
        this.longitud--;
        return nodoActual;
      }
      nodoActual = nodoActual.siguiente;
    }
    return null;
  }
}
// se crea una funcion que limpia las entradas de valores despues de presionar los botones

function LimpiarEntradas() {
  txtcodigo.value = "";
  txtnombre.value = "";
  txtapellido.value = "";
  txtcorreo.value = "";
  txtcodigo.focus();
}
//se instancia una nueva ListaEnlazadaDoble
const lista = new ListaEnlazadaDoble();
//se crea la funcion verDatos que nos muestra los valores registrados en una tabla
function VerDatos() {
  let cod, nom, apellido, correo;
  let nodoActual = lista.cabeza;
  num = 0;
  llenarDatos.innerHTML = "";
  while (nodoActual !== null) {
    cod = nodoActual.codigo;
    nom = nodoActual.nombre;
    apellido = nodoActual.apellido;
    correo = nodoActual.correo;
    num++;

    const fila = document.createElement("tr");
    fila.innerHTML = `
                <td>${num}</td>
                <td>${cod}</td>
                <td>${nom}</td>
                <td>${apellido}</td>
                <td>${correo}</td>
              `;

    llenarDatos.appendChild(fila);

    nodoActual = nodoActual.siguiente;
  }
}
//al boton guardar al momento de dar click se lee los valores introducidos por los inputs para luego agregar a la lista

guardar.addEventListener("click", () => {
  let cod = txtcodigo.value;
  let nom = txtnombre.value.toUpperCase();
  let apellido = txtapellido.value.toUpperCase();
  let correo = txtcorreo.value;
  lista.agregar(cod, nom, apellido, correo);
  LimpiarEntradas();
  VerDatos();
});

//al boton de eliminar al momento de darle click lee el codigo introducido para despues pasarlo como parametro al metodo eliminar para despues eliminar de la lista
eliminarbtn.addEventListener("click", () => {
  let cod = txtcodigo.value;
  lista.eliminar(cod);

  LimpiarEntradas();
  VerDatos();
});
//al boton de consultar al momento de darle click lee el codigo introducido para despues pasarlo como parametro al metodo buscar y encontrar los valores que involucran dicho codigo

consultar.addEventListener("click", () => {
  let cod = txtcodigo.value;
  if (cod === "") {
    alert("Ingrese un codigo por favor");
  } else {
    busqueda = lista.buscar(cod);
    if (busqueda !== null) {
      txtnombre.value = busqueda.nombre;
      txtapellido.value = busqueda.apellido;
      txtcorreo.value = busqueda.correo;
    } else {
      alert("El código: " + cod + ", no esta en la Lista..");
    }
  }
});
//al boton de actualizar al momento de darle click leo el codigo,nombre,apellido,correo introducido para despues pasarlo como parametro al metodo actualizar, para despues actualizarlo con los nuevos datos

actualizar.addEventListener("click", () => {
  let cod = txtcodigo.value;
  let nom = txtnombre.value.toUpperCase();
  let apellido = txtapellido.value.toUpperCase();
  let correo = txtcorreo.value;
  lista.actualizar(cod, nom, apellido, correo);

  LimpiarEntradas();
  VerDatos();
});

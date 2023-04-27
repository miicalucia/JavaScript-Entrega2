class Verdura {
    constructor(nombre, cantidad, precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

/* const lechuga = new Verdura("Lechuga", 1000, 500);
const tomate = new Verdura("Tomate", 1000, 550);
const zanahoria = new Verdura("Zanahoria", 1000, 210);
const ajo = new Verdura("Ajo", 1000, 110);
const papa = new Verdura("Papa", 1000, 230);
const cebolla = new Verdura("Cebolla", 1000, 180);
const banana = new Verdura("Banana", 1000, 600);
const manzana = new Verdura("Manzana", 1000, 650);
const naranja = new Verdura("Naranja", 1000, 800);
const pera = new Verdura("Pera", 1000, 450); */

const listaVerduras = [];

listaVerduras.push();

alert("Vamos de compras a la verdulería!!");

function inicio() {
    let elegirOpcion = parseInt(prompt("Selecciona una opción: \n 1) Agregar una fruta o verdura \n 2) Eliminar una fruta o verdura \n 3) Lista de productos \n 4) Ir a pagar \n 5) Salir"));
    return elegirOpcion;
}

function agregarVerdura() {
    let nombre = prompt("¿Qué verdura/fruta desea llevar?: ");
    let cantidad = prompt("Coloque el peso en gramos, por favor: ");

    while (cantidad <= 0) {
        cantidad = parseInt(prompt("Ingrese el peso nuevamente: "));
    }

    let precio = prompt("Coloque el precio, por favor: ");
    let verdura = new Verdura(nombre, cantidad, precio);
    listaVerduras.push(verdura);
    console.log(listaVerduras);

    let sumarVerdura = prompt("¿Desea agregar más verdura/fruta? (si/no)")
    if(sumarVerdura === "si") {
        agregarVerdura();
    } else {
        inicio();
    }
}

function eliminarVerdura() {
    let nombre = prompt("¿Qué verdura/fruta desea eliminar?: ")
    let verdura = listaVerduras.find(verdura => verdura.nombre === nombre);
    let indiceVerdura = listaVerduras.indexOf(indiceVerdura);
    listaVerduras.splice(indiceVerdura, 1);
    console.log(listaVerduras);
}

function salir() {
    alert("Gracias por venir");
}

let elegirOpcion = inicio();
switch (elegirOpcion) {
    case 1:
        agregarVerdura();
        break;
    case 2:
        eliminarVerdura();
        break;
    case 3:
        listaProductos();
        break;
    case 4:
        pagar();
        break;
    case 5:
        salir();
        break;
    default:
        alert("Vamos de nuevo!");
        break;
}
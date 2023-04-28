class Verdura {
    constructor(nombre, cantidad, precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

let listaVerduras = [];
console.log(listaVerduras);

alert("Vamos de compras a la verdulería!!");


function inicio() {
    let elegirOpcion = "";
    while (elegirOpcion !== "5") {
        elegirOpcion = prompt("Selecciona una opción: \n 1) Agregar una fruta o verdura \n 2) Eliminar una fruta o verdura \n 3) Lista de productos \n 4) Ir a pagar \n 5) Salir");
        switch (elegirOpcion) {
            case "1":
                agregarVerdura();
                break;
            case "2":
                eliminarVerdura();
                break;
            case "3":
                listaProductos();
                break;
            case "4":
                pagar();
                break;
            case "5":
                alert("Gracias por venir");
                break;
            default:
                alert("Vamos de nuevo!");
                break;
        }
    }
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
}

function eliminarVerdura() {
    let nombre = prompt("¿Qué verdura/fruta desea eliminar?: ")
    let verdura = listaVerduras.find(verdura => verdura.nombre === nombre);
    let indiceVerdura = listaVerduras.indexOf(verdura);
    listaVerduras.splice(indiceVerdura, 1);
    console.log(listaVerduras);
}

function listaProductos() {
    let listado = "Listado de productos: \n";
    for (let i = 0; i < listaVerduras.lenght; i++) {
        listado += `Verdura/Fruta: ${listaVerduras[i].nombre}\n`
        listado += `Cantidad: ${listaVerduras[i].cantidad}\n`
        listado += `Precio: ${listaVerduras[i].precio}\n`
    }
    alert(listado);
}

function pagar() {

}

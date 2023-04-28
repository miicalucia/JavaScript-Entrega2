class Verdura {
    constructor(nombre, cantidad, precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

const listaVerduras = [];
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

    let nuevaVerdura = new Verdura(nombre, cantidad, precio);
    listaVerduras.push(nuevaVerdura);
    console.log(listaVerduras);
}

function eliminarVerdura() {
    let nombre = prompt("¿Qué verdura/fruta desea eliminar?: ")
    let verdura = listaVerduras.find(verdura => verdura.nombre === nombre);
    if (!verdura) {
        alert(`No se encontró ninguna verdura/fruta con el nombre ${nombre}`);
        return;
    }
    let indiceVerdura = listaVerduras.indexOf(verdura);
    listaVerduras.splice(indiceVerdura, 1);
    alert(`Se eliminó ${verdura.nombre} de la lista.`);
    return verdura;
}

function listaProductos() {
    /*let listado = "Listado de productos: \n";
    for (let i = 0; i < listaVerduras.length; i++) {
        listado += `Verdura/Fruta: ${listaVerduras[i].nombre}\n`
        listado += `Cantidad: ${listaVerduras[i].cantidad}\n`
        listado += `Precio: ${listaVerduras[i].precio}\n`
    }
    alert(listado);*/
    let listado = listaVerduras.map(function (verdura) {
        return `Verdura/Fruta: ${verdura.nombre} \n Cantidad: ${verdura.cantidad} \n Precio: ${verdura.precio} \n`;
    });
    alert(`Listado de productos: \n${listado.join("")}`);

}

function pagar() {

}

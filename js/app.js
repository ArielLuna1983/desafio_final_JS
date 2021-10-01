//
//
class Producto {
    constructor(nombre, marca, categoria, precio, stock, img,sku) {
        this.nombre = nombre;
        this.marca = marca;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
        this.img = img
        this.sku = sku;
    }
}

let totalCarrito = 0

const Productos = []
const Compras = []

const Producto01 = new Producto("LAPTOP", "Sony", "Laptop", 50000, 10, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8w9qMz4ce-OUvgv55a6TvlK8zPGdXtHoK4g&usqp=CAU", 01);
const Producto02 = new Producto("CPU", "AMD", "Ryzen 5950", 120000, 10, "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/03/amd-2253511.jpg?itok=qHdkPvXD", 02);
const Producto03 = new Producto("RAM", "Crucial", "Ballistix 8gb", 8000, 15, "https://i.ytimg.com/vi/9EWJn8qeLcQ/maxresdefault.jpg", 03);
const Producto04 = new Producto("MotherBoard", "MSI", "B550M", 15000, 12, "https://www.lapulga.com.do/f/6995038-1.jpg", 04);
const Producto05 = new Producto("GPU", "Asus ROG", "Nvidia 3090", 800000, 2, "https://www.servethehome.com/wp-content/uploads/2020/12/ASUS-ROG-STRIX-RTX-3090-OC-Box-Front.jpg", 05);
const Producto06 = new Producto("PSU", "Gigabyte", "80 PLUS Gold", 35000, 10, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRe13G1UNGmJLDRDnXZbzgSqFgCmzmUyaePg&usqp=CAU", 06);
const Producto07 = new Producto("SSD", "Crucial", "Bx 500", 5000, 15, "https://www.muycomputer.com/wp-content/uploads/2019/02/Crucial-BX500.jpg", 07);
const Producto08 = new Producto("Gabinate", "ThermalTake", "ATX", 10000, 50, "https://www.compugarden.com.ar/Temp/App_WebSite/App_PictureFiles/Items/CA-1L2-00S1WN-00_800.jpg", 08);

Productos.push(Producto01);
Productos.push(Producto02);
Productos.push(Producto03);
Productos.push(Producto04);
Productos.push(Producto05);
Productos.push(Producto06);
Productos.push(Producto07);
Productos.push(Producto08);

console.log(Productos);

Productos.forEach(e => {
    let select = document.getElementById("tienda")
    let divCard = document.createElement("div")
    divCard.setAttribute("class", "card col-lg-3 col-md-6 bg-dark")

    let cardBody = document.createElement("div")
    cardBody.setAttribute("class", "card-body")

    let img1 = document.createElement("img")
    img1.setAttribute("src", `${e.img}`)
    img1.setAttribute("class", "card-img-top img-fluid")
    img1.setAttribute("alt", `${e.nombre}`)

    let h51 = document.createElement("h5")
    h51.setAttribute("class", "card-title text-center text-info")
    h51.textContent = `${e.nombre}`;

    let h61 = document.createElement("h6")
    h61.setAttribute("class", "card-subtitle mb-2 text-light")
    h61.textContent = `Marca ${e.marca}`;

    let p1a = document.createElement("div")
    p1a.setAttribute("class", "card-text text-light")
    p1a.textContent = `${e.categoria}`;

    let p2a = document.createElement("p")
    p2a.setAttribute("class", "card-text text-success mt-3")
    p2a.setAttribute("id", `precio${(Productos.indexOf(e))}`)
    p2a.textContent = `$${e.precio}`;

    let p3a = document.createElement("p")
    p3a.setAttribute("class", "card-text text-warning mt-3")
    p3a.textContent = `Disponibles: ${e.stock} unidades`;

    let btn1 = document.createElement("button")
    btn1.setAttribute("class", "btn btn-outline-success mt-5")
    btn1.setAttribute("id", `${e.sku}`)
    btn1.setAttribute("onclick", `carting(${e.sku})`)
    btn1.textContent = `Agregar al carrito`;

    let botonVerCarro = document.getElementById("verCarrito")
    botonVerCarro.setAttribute("onclick", "verCarroCompras()")

    select.appendChild(divCard)
    divCard.appendChild(cardBody)
    cardBody.appendChild(img1)
    cardBody.appendChild(h51)
    cardBody.appendChild(h61)
    cardBody.appendChild(p1a)
    p1a.appendChild(p2a)
    p1a.appendChild(p3a)
    cardBody.appendChild(btn1)

});

function carting(id) {
    switch (id) {
        case Producto01.sku:
            enviarInformación(Producto01)
            break;
        case Producto02.sku:
            enviarInformación(Producto02)
            break;
        case Producto03.sku:
            enviarInformación(Producto03)
            break;
        case Producto04.sku:
            enviarInformación(Producto04)
            break;
        case Producto05.sku:
            enviarInformación(Producto05)
            break;
        case Producto06.sku:
            enviarInformación(Producto06)
            break;
        case Producto07.sku:
            enviarInformación(Producto07)
            break;
        case Producto08.sku:
            enviarInformación(Producto08)
            break;
        default:
            console.log("No tenemos ese equipo")
            break;
    }

}

function verCarroCompras(){
    let comprasParse = JSON.parse(localStorage.getItem("ventas"))
    console.log(comprasParse) 

    comprasParse.forEach(e => {
        let cart = document.getElementById("carrito");

        let botonRecargar = document.getElementById("reload")
        botonRecargar.setAttribute("onclick", "recargar()")

        let divCart = document.createElement("div")
        divCart.setAttribute("class", "card bg-dark")

        let cartBody = document.createElement("div")
        cartBody.setAttribute("class", "card-body")

        let h52 = document.createElement("h5")
        h52.setAttribute("class", "card-title text-center text-info")
        h52.textContent = `${e.nombre}`;

        let h62 = document.createElement("h6")
        h62.setAttribute("class", "card-subtitle mb-2 text-light")
        h62.textContent = `Marca ${e.marca}`;

        let p1b = document.createElement("div")
        p1b.setAttribute("class", "card-text text-light")
        p1b.textContent = `${e.categoria}`;

        let p2b = document.createElement("p")
        p2b.setAttribute("class", "card-text text-success mt-3")
        p2b.setAttribute("id", "precio")
        p2b.textContent = `$${e.precio}`;

        let btn2 = document.createElement("button");
        btn2.setAttribute("class", "btn btn-danger mt-3")
        btn2.setAttribute("id", `${e.sku}`)
        btn2.setAttribute("onclick", `deletep(${e.sku})`);
        btn2.textContent = `Eliminar del carrito`;

        cart.appendChild(divCart)
        divCart.appendChild(cartBody)
        cartBody.appendChild(h52)
        cartBody.appendChild(h62)
        cartBody.appendChild(p1b)
        p1b.appendChild(p2b)
        cartBody.appendChild(btn2)

        let Total = document.getElementById("total");
        let valorFinal = e.precio;
        totalCarrito = totalCarrito + valorFinal;
        Total.textContent = `$${totalCarrito}`;

        let reset = document.getElementById("Reset")
        reset.setAttribute("onclick", "reset()")
    });
}

function recargar(){
    location.reload()
}


function reset(){
    localStorage.clear()
    location.reload()
}


function deletep(sku) {
    let comprado = JSON.parse(localStorage.getItem("ventas"));
    let comprando = comprado.filter(e => e.sku != sku);
    localStorage.setItem("ventas", JSON.stringify(comprando));
    location.reload()
}

function enviarInformación(producto){
    if(JSON.parse(localStorage.getItem("ventas")) != null){
        ventasCarrito = JSON.parse(localStorage.getItem("ventas"))
        ventasCarrito.push(producto)
        console.log(ventasCarrito)
        localStorage.setItem("ventas", JSON.stringify(ventasCarrito))
    }else{
        Compras.push(producto)
        console.log(Compras)
        localStorage.setItem("ventas", JSON.stringify(Compras))
    }
}

let cuenta = document.getElementById("cuenta");
cuenta.setAttribute("onclick", "dolarizar()");

//Jquery

const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

$.get(url, (res, est) => {
    if (est === "success"){
        console.log(res);
        let dolarBlue = res[1]
        $("#dolar").append(`
            <div class="card bg-light" style="width: 18rem;">
            <div class="card-body">
            <h3 class="card-title text-info">${dolarBlue.casa.nombre}</h4>
            <p class="card-text text-danger">Para la compra: USD $${dolarBlue.casa.compra}</p>
            <p class="card-text text-danger">Para la venta: USD $${dolarBlue.casa.venta}</p>
            `)
            console.log(`${dolarBlue.casa.compra}`)
    }
})

function dolarizar(){
    $.get(url, (res, est) => {
    if (est === "success"){
        let dolarBlue = res[1]
        let b = (`${dolarBlue.casa.compra}`);
        let productosDolarizados = Productos.map(function(e){
            return parseInt(e.precio / parseInt(b))
        })
        console.log(productosDolarizados);
        
        productosDolarizados.forEach(e => {
            $(`#precio${(productosDolarizados.indexOf(e))}`).append(`
            <p class="card-text text-primary">USD $${e}</p>
            `)
        });
}})
}

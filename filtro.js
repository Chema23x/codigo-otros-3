// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

//  Se reemplazo  li por Items la constante ---- se cambio el get ElemetensByName por querySelector
const items = document.querySelector("#lista-de-productos")
// Se reemplazó $i por input --- se cambio la clase de .input a .barraDeFiltro
const input = document.querySelector('.barraDeFiltro');


for (let i = 0; i < productos.length; i++) {
  // Se reemplaza el var por let -- y se cambia d a contenedor
  let contenedor = document.createElement("div")
  contenedor.classList.add("producto")

  //Se reemplaza var por let -- cambia ti por texto
  let titulo = document.createElement("p")
  titulo.classList.add("titulo")
  titulo.textContent = productos[i].nombre
  
  //Se cambia var por let
  let imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  contenedor.appendChild(titulo)
  contenedor.appendChild(imagen)

  items.appendChild(contenedor)
}

function displayProductos(productos){
const botonDeFiltro = document.querySelector("#boton");

botonDeFiltro.onclick = function() {
  while (items.firstChild) {
    items.removeChild(items.firstChild);
  }

  const texto = input.value;
  console.log(titulo);
  const productosFiltrados = filtrado(productos, titulo);

  for (let i = 0; i < productosFiltrados.length; i++) {
    var contenedor = document.createElement("div")
    contenedor.classList.add("producto")
  
    var titulo = document.createElement("p")
    titulo.classList.add("titulo")
    titulo.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    contenedor.appendChild(ti)
    contenedor.appendChild(imagen)
  
    items.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
} 
} 
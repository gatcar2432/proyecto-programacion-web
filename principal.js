let tipoActual = "";
let carrito = [];
let total = 0;


const menus = {

desayuno:[
{nombre:"Atole de maíz",descripcion:"Bebida espesa de maíz tradicional.",precio:65,imagen:"https://res.cloudinary.com/dnrhcpdur/image/upload/v1779861446/atole_s18boh.jpg"},
{nombre:"Pan de maíz",descripcion:"Pan cocido con técnicas ancestrales.",precio:75,imagen:"https://res.cloudinary.com/dnrhcpdur/image/upload/v1779861614/pan_maiz_xxdg6x.jpg"},
{nombre:"Tortilla con chaya",descripcion:"Tortillas nutritivas con chaya.",precio:70,imagen:"https://res.cloudinary.com/dnrhcpdur/image/upload/v1779862859/empanadas_chaya_c0xezm.jpg"},
{nombre:"Atole de cacao",descripcion:"Bebida de cacao tradicional.",precio:80,imagen:"https://res.cloudinary.com/dnrhcpdur/image/upload/v1779862931/atole_cacao_iezn0r.jpg"},
{nombre:"Tamal de frijol",descripcion:"Tamal relleno de frijol.",precio:85,imagen:"https://res.cloudinary.com/dnrhcpdur/image/upload/v1779863075/tamal_frijol_igcg69.jpg"},
{nombre:"Fruta con miel",descripcion:"Fruta fresca con miel.",precio:60,imagen:"https://res.cloudinary.com/dnrhcpdur/image/upload/v1779863257/frutas_miel_lxnvkb.jpg"},
{nombre:"Pozol",descripcion:"Bebida refrescante de maíz.",precio:55,imagen:"https://res.cloudinary.com/dnrhcpdur/image/upload/v1779863350/cacao_sliqyb.jpg"},
{nombre:"Cacao espumoso",descripcion:"Bebida ceremonial.",precio:90,imagen:"https://res.cloudinary.com/dnrhcpdur/image/upload/v1779863480/espumoso_nrmqks.jpg"}
],

comida:[
{nombre:"Cochinita pibil",descripcion:"Cerdo cocido bajo tierra con achiote.",precio:150,imagen:"https://res.cloudinary.com/dnrhcpdur/image/upload/v1779863539/pibil_mzgbib.jpg"},
{nombre:"Relleno negro",descripcion:"Platillo con recado negro.",precio:140,imagen:"https://res.cloudinary.com/dnrhcpdur/image/upload/v1779863657/reyeno_wrkazj.jpg"},
{nombre:"Sopa de lima",descripcion:"Caldo con toque cítrico.",precio:120,imagen:"https://res.cloudinary.com/dnrhcpdur/image/upload/v1779863820/sopa_lima_tchm6x.jpg"},
{nombre:"Papadzules",descripcion:"Tortillas con huevo y pepita.",precio:130,imagen:"https://res.cloudinary.com/dnrhcpdur/image/upload/v1779863887/ench_jbp6zk.jpg"},
{nombre:"Poc chuc",descripcion:"Carne asada con cítricos.",precio:160,imagen:"https://res.cloudinary.com/dnrhcpdur/image/upload/v1779863946/Poc_chuc_vbhse1.jpg"},
{nombre:"Frijol con puerco",descripcion:"Guiso tradicional.",precio:135,imagen:"https://res.cloudinary.com/dnrhcpdur/image/upload/v1779864087/frijol_zoyhi6.jpg"},
{nombre:"Tamales colados",descripcion:"Tamales suaves tradicionales.",precio:120,imagen:"https://res.cloudinary.com/dnrhcpdur/image/upload/v1779864170/tamal_odxvan.jpg"},
{nombre:"Tikin Xic",descripcion:"Pescado con achiote asado.",precio:170,imagen:"https://res.cloudinary.com/dnrhcpdur/image/upload/v1779864302/Tikin_Xic_fa45ob.jpg"}
],

cena:[
{nombre:"Panuchos",descripcion:"Tortillas rellenas fritas.",precio:95,imagen:"https://res.cloudinary.com/dnrhcpdur/image/upload/v1779864391/panuchos_lq7qgv.jpg"},
{nombre:"Salbutes",descripcion:"Antojitos fritos.",precio:100,imagen:"https://res.cloudinary.com/dnrhcpdur/image/upload/v1779864454/Salbutes_nc75nu.jpg"},
{nombre:"Empanadas",descripcion:"Masa rellena frita.",precio:90,imagen:"https://res.cloudinary.com/dnrhcpdur/image/upload/v1779864510/Empanadas_kbe6do.jpg"},
{nombre:"Tamales dulces",descripcion:"Tamales dulces tradicionales.",precio:85,imagen:"https://res.cloudinary.com/dnrhcpdur/image/upload/v1779864557/dulce_ttfs4j.jpg"},
{nombre:"Atole ligero",descripcion:"Bebida ligera nocturna.",precio:60,imagen:"https://res.cloudinary.com/dnrhcpdur/image/upload/v1779864611/atole_ligero_hjkedj.jpg"},
{nombre:"Caldo de pavo",descripcion:"Caldo tradicional.",precio:110,imagen:"https://res.cloudinary.com/dnrhcpdur/image/upload/v1779864665/pavo_syfmow.jpg"},
{nombre:"Queso con miel",descripcion:"Combinación dulce.",precio:80,imagen:"https://res.cloudinary.com/dnrhcpdur/image/upload/v1779864713/queso_jsbzzk.jpg"},
{nombre:"Elote asado",descripcion:"Maíz asado con sal.",precio:70,imagen:"https://res.cloudinary.com/dnrhcpdur/image/upload/v1779864757/elote_lwezid.jpg"}
]

};


function mostrarMenu(tipo){
  tipoActual = tipo;

  let contenedor = document.getElementById("contenedor-platillos");
  contenedor.style.display = "grid"; 
document.getElementById("btnCerrarMenu").style.display = "block";
  contenedor.innerHTML = "";

  menus[tipo].forEach((p,i)=>{
    contenedor.innerHTML += `
    <div class="card">
      <img src="${p.imagen}">
      <h3>${p.nombre}</h3>
      <p>${p.descripcion}</p>

      <select id="tipo${i}" class="selector">
        <option value="llevar">Llevar</option>
        <option value="aqui">Comer aquí</option>
      </select>

      <p class="precio">$${p.precio}</p>

      <button onclick="agregar(${i})">Agregar</button>
    </div>
    `;
  });
}


function agregar(index){
  let p = menus[tipoActual][index];
  let tipo = document.getElementById("tipo"+index).value;

  let extra = (tipo === "aqui") ? 15 : 0;
  let precioFinal = p.precio + extra;

  carrito.push({
    nombre: p.nombre,
    tipo: tipo,
    precio: precioFinal
  });

  total += precioFinal;

  document.getElementById("carrito").innerText =
  "Pedido (" + carrito.length + ") $" + total;
}


function verCarrito(){
  let lista = document.getElementById("listaCarrito");
  lista.innerHTML = "";
  carrito.forEach(item=>{
    lista.innerHTML += `
    <li>${item.nombre} - ${item.tipo} - $${item.precio}</li>`;
  });
  document.getElementById("total").innerText =
  "Total: $" + total;
  document.getElementById("modalCarrito").style.display = "flex";
}


function cerrarCarrito(){
  document.getElementById("modalCarrito").style.display = "none";
}


function vaciarCarrito(){
  carrito = [];
  total = 0;

  document.getElementById("carrito").innerText = "pedido (0) $0";
  document.getElementById("listaCarrito").innerHTML = "";
  document.getElementById("total").innerText = "Total: $0";
}
function abrirPago(){
document.getElementById("modalPago").style.display="flex";
}
function cerrarPago(){
document.getElementById("modalPago").style.display="none";
}
function ocultarMetodos(){

document.querySelectorAll(".metodo-pago").forEach(m=>{
m.classList.remove("activo");
});

}



function pagoTarjeta(){
ocultarMetodos();
document.querySelectorAll(".metodo-pago")[0]
.classList.add("activo");

}



function pagoEfectivo(){
ocultarMetodos();
document.querySelectorAll(".metodo-pago")[1]
.classList.add("activo");

}


function pagoPayPal(){
ocultarMetodos();
document.querySelectorAll(".metodo-pago")[2]
.classList.add("activo");

}

function cerrarMenu(){
let contenedor =
document.getElementById("contenedor-platillos");
contenedor.style.display = "none";
contenedor.innerHTML = "";
document.getElementById("btnCerrarMenu")
.style.display = "none";
}
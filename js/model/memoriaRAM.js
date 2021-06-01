let r1 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/memoria-4gb-ddr4-2666mhz-adata-compatible-2400-sdis-0.jpg",
    nombre: "MEMORIA 4GB DDR4 2666mhz ADATA compatible 2400 s/dis",
    precio: 3112.00
}

let r2 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/memoria-4gb-ddr4-2400-kingston-sdis-0.jpg",
    nombre: "MEMORIA 4GB DDR4 2400 KINGSTON s/dis",
    precio: 3651.00
}

let r3 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/memoria-4gb-ddr4-2666-kingston-0.jpg",
    nombre: "MEMORIA 4GB DDR4 2666 KINGSTON FURY",
    precio: 3815.00
}

let r4 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/memoria-4gb-ddr4-2666mhz-corsair-value-0.jpg",
    nombre: "MEMORIA 4GB DDR4 2666mhz CORSAIR VALUE",
    precio: 5316.00
}

let r5 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/memoria-8gb-ddr4-3200-ballistix-bulk-black-0.jpg",
    nombre: "MEMORIA 8GB DDR4 2666 KINGSTON VALUE",
    precio: 6174.00
}

let r6 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/memoria-8gb-ddr4-2666-mhz-hp-v6-red-0.jpg",
    nombre: "MEMORIA 8GB DDR4 MHZ HP V6 RED",
    precio: 6174.00
}

let r7 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/memoria-8gb-ddr4-3000-adata-xpg-d10-0.jpg",
    nombre: "MEMORIA 8GB DDR4 3000 ADATA XPG D10",
    precio: 6768.00
}

let r8 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/memoria-8gb-ddr4-3200-kingston-fury-0.jpg",
    nombre: "MEMORIA 8GB DDR4 3200 KINGSTON FURY",
    precio: 6948.00
}

let r9 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/memoria-8gb-ddr4-3200-mhz-hp-rgb-v8-cl16-0.jpg",
    nombre: "MEMORIA 8GB DDR4 3200 MHZ HP RGB V8 CL16",
    precio: 7140.00
}

let rams = `<div id="lista-productos" class="container d-flex justify-content-center mt-50 mb-50">
<div class="row">
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${r1.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${r1.nombre}</p> </h6> <a href="#btn-ram" class="text-muted" data-abc="true">Memoria RAM</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${r1.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${r2.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${r2.nombre}</p> </h6> <a href="#btn-ram" class="text-muted" data-abc="true">Memoria RAM</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${r2.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${r3.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${r3.nombre}</p> </h6> <a href="#btn-ram" class="text-muted" data-abc="true">Memoria RAM</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${r3.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${r4.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${r4.nombre}</p> </h6> <a href="#btn-ram" class="text-muted" data-abc="true">Memoria RAM</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${r4.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${r5.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${r5.nombre}</p> </h6> <a href="#btn-ram" class="text-muted" data-abc="true">Memoria RAM</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${r5.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${r6.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${r6.nombre}</p> </h6> <a href="#btn-ram" class="text-muted" data-abc="true">Memoria RAM</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${r6.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2" ></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${r7.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${r7.nombre}</p> </h6> <a href="#btn-ram" class="text-muted" data-abc="true">Memoria RAM</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${r7.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${r8.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${r8.nombre}</p> </h6> <a href="#btn-ram" class="text-muted" data-abc="true">Memoria RAM</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${r8.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${r9.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${r9.nombre}</p> </h6> <a href="#btn-ram" class="text-muted" data-abc="true">Memoria RAM</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${r9.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
</div>
</div>`;

let descripcionRAM = `<div class="desc-item"> <h2>Es el turno de la Memoria Ram, esta aumentará la velocidad de desempeño de tu máquina. Puedes incorporar más dependiendo de la cantidad de slots del motherboard que antes escogiste.</h2></div>`;

$("#btn-ram").on('click', function(){
    $('html, body').animate({
        scrollTop: $(".desc-item").offset().top    
    });
    $(".container").replaceWith(rams);
    $(".desc-item").replaceWith(descripcionRAM)
    actualizar();
})

function actualizar(){
    const productos = document.getElementById("lista-productos");
    productos.addEventListener('click', (e) => {carro.agregarProducto(e)});
}
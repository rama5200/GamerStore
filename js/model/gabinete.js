let g1 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/gabinete-gamer-aureox-hebe-arx-340g-0.jpg",
    nombre: "GABINETE GAMEMAX H601 BR (NEGRO/ROJO)",
    precio: 4069.00
}

let g2 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/gabinete-aerocool-prime--1-fan-argb-0.jpg",
    nombre: "GABINETE AEROCOOL PRIME + 1 FAN ARGB",
    precio: 4212.00
}

let g3 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/gabinete-gamemax-h602-wb-usb-30-1-fan-0.jpg",
    nombre: "GABINETE GAMEMAX H602 WB USB 3.0 1 FAN",
    precio: 4803.00
}

let g4 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/gabinete-qbox-gaming-series-195g3-0.jpg",
    nombre: "GABINETE QBOX GAMING SERIES 304T",
    precio: 5099.00
}

let g5 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/gabinete-gamemax-g561-black-0.jpg",
    nombre: "GABINETE GAMEMAX G561 BLACK",
    precio: 5099.00
}

let g6 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/gabinete-coolermaster-q300l-mini-0.jpg",
    nombre: "GABINETE COOLERMASTER Q300L MINI",
    precio: 5290.00
}

let g7 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/gabinete-raidmax-f05-argb-fan-x1-vidrio-templado-0.jpg",
    nombre: "GABINETE RAIDMAX FO5 ARGB FAN X1 VIDRIO TEMPLADO",
    precio: 6797.00
}

let gabinetes = `<div id="lista-productos" class="container d-flex justify-content-center mt-50 mb-50">
<div class="row">
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${g1.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${g1.nombre}</p> </h6> <a href="#btn-gabinete" class="text-muted" data-abc="true">Gabinete</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${g1.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${g2.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${g2.nombre}</p> </h6> <a href="#btn-gabinete" class="text-muted" data-abc="true">Gabinete</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${g2.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${g3.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${g3.nombre}</p> </h6> <a href="#btn-gabinete" class="text-muted" data-abc="true">Gabinete</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${g3.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${g4.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${g4.nombre}</p> </h6> <a href="#btn-gabinete" class="text-muted" data-abc="true">Gabinete</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${g4.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${g5.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${g5.nombre}</p> </h6> <a href="#btn-gabinete" class="text-muted" data-abc="true">Gabinete</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${g5.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${g6.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${g6.nombre}</p> </h6> <a href="#btn-gabinete" class="text-muted" data-abc="true">Gabinete</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${g6.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${g7.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${g7.nombre}</p> </h6> <a href="#btn-gabinete" class="text-muted" data-abc="true">Gabinete</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${g7.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
</div>
</div>`;

let descripcionGabinete = `<div class="desc-item"> <h2>El gabinete no sólo reúne y protege tu PC, también es un medio de expresión y estética. Elige la que más se adapte a vos.</h2></div>`;

$("#btn-gabinete").on('click', function(){
    $('html, body').animate({
        scrollTop: $(".desc-item").offset().top    
    });
    $(".container").replaceWith(gabinetes);
    $(".desc-item").replaceWith(descripcionGabinete)
    actualizar();
})

function actualizar(){
    const productos = document.getElementById("lista-productos");
    productos.addEventListener('click', (e) => {carro.agregarProducto(e)});
}
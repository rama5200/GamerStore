let d1 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/disco-hdd-1tb-sata3-seagate-barracuda-0.jpg",
    nombre: "DISCO HDD 1TB SATA3 SEAGATE BARRACUDA",
    precio: 5160.00
}

let d2 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/disco-hdd-1tb-sata3-seagate-skyhawk-0.jpg",
    nombre: "DISCO HDD 1TB SATA3 SEAGATE SKYHAWK",
    precio: 5844.00
}

let d3 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/disco-hdd-2tb-sata3-seagate-barracuda-5900-0.jpg",
    nombre: "DISCO HDD 2TB SATA3 SEAGATE BARRACUDA 5900",
    precio: 7900.00
}

let d4 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/disco-hdd-2tb-sata3-seagate-6-gbs-ironwolf-0.jpg",
    nombre: "DISCO HDD 2TB SATA3 SEAGATE 6 gb/s ironWolf",
    precio: 13999.00
}

let d5 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/disco-hdd-4tb-sata3-seagate-skyhawk-0.jpg",
    nombre: "DISCO HDD 4TB SATA3 SEAGATE SKYHAWK",
    precio: 19490.00
}

let d6 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/disco-hdd-12tb-wd-purple-35-sata-7200-256mb-0.jpg",
    nombre: "DISCO HDD 12TB WD PURPLE 3.5 SATA 7200 256MB",
    precio: 102900.00
}

let discos = `<div id="lista-productos" class="container d-flex justify-content-center mt-50 mb-50">
<div class="row">
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${d1.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${d1.nombre}</p> </h6> <a href="#btn-disco" class="text-muted" data-abc="true">Disco duro</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${d1.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${d2.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${d2.nombre}</p> </h6> <a href="#btn-disco" class="text-muted" data-abc="true">Disco duro</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${d2.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${d3.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${d3.nombre}</p> </h6> <a href="#btn-disco" class="text-muted" data-abc="true">Disco duro</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${d3.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${d4.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${d4.nombre}</p> </h6> <a href="#btn-disco" class="text-muted" data-abc="true">Disco duro</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${d4.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${d5.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${d5.nombre}</p> </h6> <a href="#btn-disco" class="text-muted" data-abc="true">Disco duro</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${d5.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${d6.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${d6.nombre}</p> </h6> <a href="#btn-disco" class="text-muted" data-abc="true">Disco duro</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${d6.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2" ></i> Add to cart</button>
        </div>
    </div>
</div>
</div>
</div>`;

let descripcionDisco = `<div class="desc-item"> <h2>De este también podrás escoger más de uno. Del disco duro dependerá la capacidad de almacenamiento de tu máquina.</h2></div>`;

$("#btn-disco").on('click', function(){
    $('html, body').animate({
        scrollTop: $(".desc-item").offset().top    
    });
    $(".container").replaceWith(discos);
    $(".desc-item").replaceWith(descripcionDisco)
    actualizar();
})

function actualizar(){
    const productos = document.getElementById("lista-productos");
    productos.addEventListener('click', (e) => {carro.agregarProducto(e)});
}
let c1 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/cpu-cooler-aerocool-air-frost-4-rgb-0.jpg",
    nombre: "CPU COOLER AEROCOOL AIR FROST 4 RGB",
    precio: 2670.00
}

let c2 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/cpu-cooler-aerocool-cylon-3-rgb-0.jpg",
    nombre: "CPU COOLER AREOCOOL CYCLON 3 RGB",
    precio: 4983.00
}

let c3 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/cpu-cooler-thermaltake-ux100-argb-0.jpg",
    nombre: "CPU COOLER THERMALTAKE UX100 ARGB",
    precio: 5644.00
}

let c4 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/cpu-cooler-thermaltake-ux200-argb-0.jpg",
    nombre: "CPU COOLER THERMALTAKE UX200 ARGB",
    precio: 9524.00
}

let c5 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/water-cooler-coolermaster-ml120l-v2-rgb-0.jpg",
    nombre: "WATER COOLER COOLERMASTER ML120L V2 RGB",
    precio: 12540.00
}

let c6 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/watercooler-cooler-master-ml240p-mirage-0.jpg",
    nombre: "WATERCOOLER COOLER MASTER ML240P MIRAGE",
    precio: 23455.00
}

let coolers = `<div id="lista-productos" class="container d-flex justify-content-center mt-50 mb-50">
<div class="row">
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${c1.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${c1.nombre}</p> </h6> <a href="#btn-cooler" class="text-muted" data-abc="true">Cooler</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${c1.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${c2.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${c2.nombre}</p> </h6> <a href="#btn-cooler" class="text-muted" data-abc="true">Cooler</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${c2.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${c3.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${c3.nombre}</p> </h6> <a href="#btn-cooler" class="text-muted" data-abc="true">Cooler</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${c3.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${c4.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${c4.nombre}</p> </h6> <a href="#btn-cooler" class="text-muted" data-abc="true">Cooler</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${c4.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${c5.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${c5.nombre}</p> </h6> <a href="#btn-cooler" class="text-muted" data-abc="true">Cooler</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${c5.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${c6.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${c6.nombre}</p> </h6> <a href="#btn-cooler" class="text-muted" data-abc="true">Cooler</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${c6.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2" ></i> Add to cart</button>
        </div>
    </div>
</div>
</div>
</div>`;

let descripcionCooler = `<div class="desc-item"> <h2>Es hora de elegir un cooler para tu procesador. Si bien estos incluyen su cooler, puedes incorporarle uno de mejor rendimiento.</h2></div>`;

$("#btn-cooler").on('click', function(){
    $('html, body').animate({
        scrollTop: $(".desc-item").offset().top    
    });
    $(".container").replaceWith(coolers);
    $(".desc-item").replaceWith(descripcionCooler)
    actualizar();
})

function actualizar(){
    const productos = document.getElementById("lista-productos");
    productos.addEventListener('click', (e) => {carro.agregarProducto(e)});
}
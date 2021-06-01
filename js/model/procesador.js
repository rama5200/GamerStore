let p1 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-celeron-g5925-s1200-ideal-mineria-0.jpg",
    nombre: "MICRO INTEL CELERON G5925 S1200",
    precio: 8990.00
}

let p2 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i3-10100f-svideo-0.jpg",
    nombre: "MICRO INTEL CORE I3 10100F S/VIDEO",
    precio: 15300.00
}

let p3 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i5-10400f-0.jpg",
    nombre: "MICRO INTEL CORE I5 10400F",
    precio: 19502.00
}

let p4 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i5-10600ka-avengers-s1200-scooler-0.jpg",
    nombre: "MICOR INTEL CORE I5 10600KA AVENGERS S1200 S/COOLER",
    precio: 31262.00
}

let p5 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i5-9400f-0.jpg",
    nombre: "MICRO INTEL CORE I5 9400F",
    precio: 20090.00
}

let p6 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i3-10105-37-ghz-s1200-0.jpg",
    nombre: "INTEL CORE I3 10105 3.7GHZ S1200",
    precio: 24999.00
}

let p7 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i5-10400-0.jpg",
    nombre: "MICRO INTEL CORE I5 10400",
    precio: 26362.00
}

let p8 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i7-9700-0.jpg",
    nombre: "MICRO INTEL CORE I7 9700",
    precio: 34888.00
}

let p9 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i9-10900f-0.jpg",
    nombre: "MICRO INTEL CORE I9 10900F",
    precio: 51390.00
}

let procesadores = `<div id="lista-productos" class="container d-flex justify-content-center mt-50 mb-50">
<div class="row">
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${p1.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${p1.nombre}</p> </h6> <a href="#btn-procesador" class="text-muted" data-abc="true">Procesador</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${p1.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${p2.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${p2.nombre}</p> </h6> <a href="#btn-procesador" class="text-muted" data-abc="true">Procesador</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${p2.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${p3.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${p3.nombre}</p> </h6> <a href="#btn-procesador" class="text-muted" data-abc="true">Procesador</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${p3.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${p4.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${p4.nombre}</p> </h6> <a href="#btn-procesador" class="text-muted" data-abc="true">Procesador</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${p4.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${p5.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${p5.nombre}</p> </h6> <a href="#btn-procesador" class="text-muted" data-abc="true">Procesador</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${p5.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${p6.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${p6.nombre}</p> </h6> <a href="#btn-procesador" class="text-muted" data-abc="true">Procesador</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${p6.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2" ></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${p7.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${p7.nombre}</p> </h6> <a href="#btn-procesador" class="text-muted" data-abc="true">Procesador</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${p7.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${p8.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${p8.nombre}</p> </h6> <a href="#btn-procesador" class="text-muted" data-abc="true">Procesador</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${p8.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${p9.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${p9.nombre}</p> <a href="#btn-procesador" class="text-muted" data-abc="true">Procesador</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${p9.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2" ></i> Add to cart</button>
        </div>
    </div>
</div>
</div>
</div>`;

let descripcionProcesador = `<div class="desc-item"> <h2>Elige tu procesador. Recuerda que este definirá la potencia de tu PC.</h2></div>`;

$('#btn-procesador').on('click', function(){
    $('html, body').animate({
        scrollTop: $(".desc-item").offset().top    
    });
    $(".container").replaceWith(procesadores);
    $(".desc-item").replaceWith(descripcionProcesador)
    actualizar();
})

function actualizar(){
    const productos = document.getElementById("lista-productos");
    productos.addEventListener('click', (e) => {carro.agregarProducto(e)});
}
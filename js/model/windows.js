let w1 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/windows-10-home-64b-oem-key-global-0.jpg",
    nombre: "WINDOWS 10 HOME 64B OEM KEY GLOBAL",
    precio: 12993.00
}

let w2 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/windows-10-pro-64b-oem-key-global-0.jpg",
    nombre: "WINDOWS 10 PRO 64B OEM KEY GLOBAL",
    precio: 15539.00
}

let windows = `<div id="lista-productos" class="container d-flex justify-content-center mt-50 mb-50">
<div class="row">
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${w1.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${w1.nombre}</p> </h6> <a href="#btn-windows" class="text-muted" data-abc="true">Windows</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${w1.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${w2.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${w2.nombre}</p> </h6> <a href="#btn-windows" class="text-muted" data-abc="true">Windows</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${w2.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
</div>
</div>`;

let descripcionwindows = `<div class="desc-item"> <h2>Solo Instalamos Windows 10 con licencia oficial en caso que se comprara la misma. De lo contrario el equipo se entrega <b>SIN</b> sistema operativo.</h2></div>`;

$("#btn-windows").on('click', function(){
    $('html, body').animate({
        scrollTop: $(".desc-item").offset().top    
    });
    $(".container").replaceWith(windows);
    $(".desc-item").replaceWith(descripcionwindows)
    actualizar();
})

function actualizar(){
    const productos = document.getElementById("lista-productos");
    productos.addEventListener('click', (e) => {carro.agregarProducto(e)});
}
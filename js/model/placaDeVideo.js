let pl1 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/video-quadro-p2200-pny-5gb-ddr5-0.jpg",
    nombre: "VIDEO QUADRIO P2200 PNY 5GB DDR5",
    precio: 115640.00
}

let pl2 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/video-geforce-gt-210-msi-1gb-ddr3-0.jpg",
    nombre: "VIDEO GEFORCE GT 210 MSI 1GB DDR3",
    precio: 5978.00
}

let pl3 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/video-geforce-gt-710-1gb-msi-lp-0.jpg",
    nombre: "VIDEO GEFORCE GT 710 1GB MSI LP",
    precio: 7785.00
}

let pl4 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/video-radeon-rx-570-8gb-gigabyte-oc-gaming-0.jpg",
    nombre: "VIDEO RADEON RX 570 8GB GIGABYTE OC GAMING",
    precio: 189699.00
}

let placas = `<div id="lista-productos" class="container d-flex justify-content-center mt-50 mb-50">
<div class="row">
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${pl1.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${pl1.nombre}</p> </h6> <a href="#btn-placa" class="text-muted" data-abc="true">Placa de video</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${pl1.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${pl2.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${pl2.nombre}</p> </h6> <a href="#btn-placa" class="text-muted" data-abc="true">Placa de video</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${pl2.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${pl3.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${pl3.nombre}</p> </h6> <a href="#btn-placa" class="text-muted" data-abc="true">Placa de video</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${pl3.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${pl4.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${pl4.nombre}</p> </h6> <a href="#btn-placa" class="text-muted" data-abc="true">Placa de video</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${pl4.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
</div>
</div>`;

let descripcionPlaca = `<div class="desc-item"> <h2>Llegó el turno de la placa de video. De esta depende regular y determinar la forma en cómo se mostraran las imágenes y texto que se observa en el monitor.
 Su calidad influye a la hora de jugar, editar vídeo o 3D. Así que si eres gamer o diseñador, te convendrá una de alto rendimiento.</h2></div>`;

$("#btn-placa").on('click', function(){
    $('html, body').animate({
        scrollTop: $(".desc-item").offset().top    
    });
    $(".container").replaceWith(placas);
    $(".desc-item").replaceWith(descripcionPlaca)
    actualizar();
})

function actualizar(){
    const productos = document.getElementById("lista-productos");
    productos.addEventListener('click', (e) => {carro.agregarProducto(e)});
}
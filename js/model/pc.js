let pc1 = {
    id: 1,
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/pc-amd-ryzen-3-2200-a320-8gb-ssd-480-kit-entrega-en-el-momento-0.jpg",
    nombre: "PC AMD RYZEN 3 2200 A320 8GB SSD 480 KIT",
    precio: 53290.00
}

let pc2 = {
    id: 2,
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/pc-gamer-intel-i5-9400fh3108gb1tbgt-210-1gbkit-0.jpg",
    nombre: "PC INTEL I5 10400 + H410 + 8GB + 1TB + KIT",
    precio: 50306.00
}

let pc3 = {
    id: 3,
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/pc-intel-i5-10400h4108gb1tbkit-0.jpg",
    nombre: "PC ASUS ATHLON 3000G - 2X4GB - SSD 240GB - KIT",
    precio: 51286.00
}

let pc4 = {
    id: 4,
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/pc-amd-ryzen-5-2400g-a320-8gb-sd-240-qbox-c31-0.jpg",
    nombre: "PC AMD RYZEN 5 2400G A320 8GB SD 240 QBOX C31",
    precio: 54416.00
}

let pc5 = {
    id: 5,
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/pc-intel-celeron-g4930--h310--4gb--240gb-ssd--kit-0.jpg",
    nombre: "PC INTEL CELERON G4930 + H310 + 4GB + 240GB SSD + KIT",
    precio: 29347.00
}

let pc6 = {
    id: 6,
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/pc-amd-2200-b450--8gb---ssd-480-1tb-gab-azza-fortaleza-entrega-inmediata-0.jpg",
    nombre: "PC AMD 2200+ B450 + 8GB + SSD 480 +1TB +GAB AZZA FORTALEZA",
    precio: 64160.00
}

let pc7 = {
    id: 7,
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/pc-performance-amd-ryzen-5-2400g8g1t-0.jpg",
    nombre: "PC PERFORMANCE AMD RYZEN 5 2400G + 8G + 1T",
    precio: 82990.00
}

let pc8 = {
    id: 8,
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/pc-intel-i7-10700b46016gb480gb-ssdkit-0.jpg",
    nombre: "PC INTEL I7 10700 + B460 + 16GB + 480GB SSD + KIT",
    precio: 81820.00
}

let pc9 = {
    id: 9,
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/pc-performance-intel-i3-9100f8gssd240gvga1gw10-0.jpg",
    nombre: "PC PERFORMANCE INTEL I3 9100F + 8G + SSD240G + VGA1G + W10",
    precio: 115000.00
}

let pcs = `<div id="lista-productos" class="container d-flex justify-content-center mt-50 mb-50">
<div class="row">
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${pc1.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${pc1.nombre}</p> </h6> <a href="#btn-pc-armada" class="text-muted" data-abc="true">PC Armada</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${pc1.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito" data-id="${pc1.id}"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${pc2.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${pc2.nombre}</p> </h6> <a href="#btn-pc-armada" class="text-muted" data-abc="true">PC Armada</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${pc2.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito" data-id="${pc2.id}"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${pc3.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${pc3.nombre}</p> </h6> <a href="#btn-pc-armada" class="text-muted" data-abc="true">PC Armada</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${pc3.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito" data-id="${pc3.id}"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${pc4.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${pc4.nombre}</p> </h6> <a href="#btn-pc-armada" class="text-muted" data-abc="true">PC Armada</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${pc4.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito" data-id="${pc4.id}><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${pc5.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${pc5.nombre}</p> </h6> <a href="#btn-pc-armada" class="text-muted" data-abc="true">PC Armada</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${pc5.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito" data-id="${pc5.id}><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${pc6.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${pc6.nombre}</p> </h6> <a href="#btn-pc-armada" class="text-muted" data-abc="true">PC Armada</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${pc6.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito" data-id="${pc6.id}><i class="fa fa-cart-plus mr-2" ></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${pc7.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${pc7.nombre}</p> </h6> <a href="#btn-pc-armada" class="text-muted" data-abc="true">PC Armada</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${pc7.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito" data-id="${pc7.id}><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${pc8.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${pc8.nombre}</p> </h6> <a href="#btn-pc-armada" class="text-muted" data-abc="true">PC Armada</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${pc8.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito" data-id="${pc8.id}><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${pc9.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${pc9.nombre}</p> <a href="#btn-pc-armada" class="text-muted" data-abc="true">PC Armada</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${pc9.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito" data-id="${pc9.id}><i class="fa fa-cart-plus mr-2" ></i> Add to cart</button>
        </div>
    </div>
</div>
</div>
</div>`;

let descripcionPc = `<div class="desc-item"> <h2>Computadoras pensadas para cubrir tus necesidades, las de tu familia y las de tu oficina. Encuentra aquí justo lo que estás buscando.</h2></div>`;

$(() => {
    $(".desc-item").append(descripcionPc)
    $(".container").replaceWith(pcs);
});

$("#btn-pc-armada").on('click', function(){
    $('html, body').animate({
        scrollTop: $(".desc-item").offset().top    
    });
    $(".container").replaceWith(pcs);
    $(".desc-item").replaceWith(descripcionPc);
    actualizar();
})

function actualizar(){
    const productos = document.getElementById("lista-productos");
    productos.addEventListener('click', (e) => {carro.agregarProducto(e)});
}



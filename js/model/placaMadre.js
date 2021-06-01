let pm1 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mother-msi-h310m-provdh-plus-0.jpg",
    nombre: "MOTHER MSI H310M PRO-VDH PLUS",
    precio: 6599.00
}

let pm2 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mother-gigabyte-gah310mh-0.jpg",
    nombre: "MOTHER GIGABYTE GA-H310M-H",
    precio: 7389.00
}

let pm3 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mother-gigabyte-h310m-ds2-20-0.jpg",
    nombre: "MOTHER GIGABYTE H310M DS2 2.0",
    precio: 7900.00
}

let pm4 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mother-gigabyte-gab365m-gaming-hd-0.jpg",
    nombre: "MOTHER GIGABYTE GA-B365M GAMING HD",
    precio: 9461.00
}

let pm5 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mother-gigabyte-b365m-aorus-elite-matx-intel-1151-0.jpg",
    nombre: "MOTHER GIGABYTE B365M AORUS ELITE M-ATX INTEL 1151",
    precio: 13524.00
}

let pm6 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mother-asrock-b460-steel-legend-0.jpg",
    nombre: "MOTHER ASROCK B460 STEEL LEGEND",
    precio: 26359.00
}

let pm7 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mother-msi-z490-mpg-gaming-plus-0.jpg",
    nombre: "MOTHER MSI Z490 MPG GAMING PLUS",
    precio: 37900.00
}

let pm8 = {
    url: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mother-msi-z590-ace-s1200-ddr4-11va-gen-0.jpg",
    nombre: "MOTHER MSI Z590 ACE S1200 DDR4 (11VA GEN)",
    precio: 73920.00
}

let placasMadre = `<div id="lista-productos" class="container d-flex justify-content-center mt-50 mb-50">
<div class="row">
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${pm1.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${pm1.nombre}</p> </h6> <a href="#btn-mother" class="text-muted" data-abc="true">Placa madre</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${pm1.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${pm2.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${pm2.nombre}</p> </h6> <a href="#btn-mother" class="text-muted" data-abc="true">Placa madre</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${pm2.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${pm3.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${pm3.nombre}</p> </h6> <a href="#btn-mother" class="text-muted" data-abc="true">Placa madre</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${pm3.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${pm4.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${pm4.nombre}</p> </h6> <a href="#btn-mother" class="text-muted" data-abc="true">Placa madre</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${pm4.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${pm5.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${pm5.nombre}</p> </h6> <a href="#btn-mother" class="text-muted" data-abc="true">Placa madre</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${pm5.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${pm6.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${pm6.nombre}</p> </h6> <a href="#btn-mother" class="text-muted" data-abc="true">Placa madre</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${pm6.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2" ></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${pm7.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${pm7.nombre}</p> </h6> <a href="#btn-mother" class="text-muted" data-abc="true">Placa madre</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${pm7.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
<div class="col-md-4 mt-2">
    <div class="card">
        <div class="card-body">
            <div class="card-img-actions"> <img src="${pm8.url}" class="card-img img-fluid" width="96" height="350" alt=""> </div>
        </div>
        <div class="card-body bg-light text-center">
            <div class="mb-2">
                <h6 class="font-weight-semibold mb-2"> <p class="text-default mb-2" data-abc="true">${pm8.nombre}</p> </h6> <a href="#btn-mother" class="text-muted" data-abc="true">Placa madre</a>
            </div>
            <h3 class="mb-0 font-weight-semibold">$${pm8.precio}</h3>
            <div> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> <i class="fa fa-star star"></i> </div>
            <button type="button" class="btn bg-cart agregar-carrito"><i class="fa fa-cart-plus mr-2"></i> Add to cart</button>
        </div>
    </div>
</div>
</div>
</div>`;

let descripcionPlacaMadre = `<div class="desc-item"> <h2>Al escoger la tarjeta madre toma en cuenta que esta es quien servirá como mecanismo de conexión entre tu microprocesador y el resto de las estructuras que verás a continuación.</h2></div>`;

$("#btn-mother").on('click', function(){
    $('html, body').animate({
        scrollTop: $(".desc-item").offset().top    
    });
    $(".container").replaceWith(placasMadre);
    $(".desc-item").replaceWith(descripcionPlacaMadre)
    actualizar();
})

function actualizar(){
    const productos = document.getElementById("lista-productos");
    productos.addEventListener('click', (e) => {carro.agregarProducto(e)});
}
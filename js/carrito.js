class Carrito{

    agregarProducto(e){
        e.preventDefault();
        if(e.target.classList.contains('agregar-carrito')){
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProducto(producto);
        }
    }

    leerDatosProducto(producto){
        const infoProducto = {
            imagen: producto.querySelector('img').src,
            nombre: producto.querySelector('h6').textContent,
            precio: producto.querySelector('h3').textContent,
            id: producto.querySelector('button').getAttribute('data-id'),
            cantidad: 1
        }
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function(productoLS){
            if(productoLS.id === infoProducto.id){
                productosLS = productoLS.id;
            }
        });
            this.insertarProducto(infoProducto);
    }

    insertarProducto(producto){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${producto.imagen}" width=100>    
            </td>
            <td> ${producto.nombre}  </td>
            <td> ${producto.cantidad}  </td>
            <td> ${producto.precio}  </td>
            <td>
                <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
            </td>
        `;
        listaProductosCarrito.appendChild(row);
        this.guardarProductosEnStorage(producto);
    }

    eliminarProducto(e){
        e.preventDefault();
        let producto, productoID;
        if(e.target.classList.contains('borrar-producto')){
            e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement
            productoID = producto.querySelector('button').getAttribute('data-id');
        }
        this.eliminarProductoLocalStorage(productoID);
    }

    vaciarCarrito(e){
        e.preventDefault();
        while(listaProductosCarrito.firstChild){
            listaProductosCarrito.removeChild(listaProductosCarrito.firstChild);
        }
        this.vaciarLocalStorage();
        return false;
    }

    guardarProductosEnStorage(producto){
        let productos;
        productos = this.obtenerProductosLocalStorage();
        productos.push(producto);
        localStorage.setItem('productos', JSON.stringify(productos));
    }

    obtenerProductosLocalStorage(){
        let productoLS;

        if(localStorage.getItem('productos') === null){
            productoLS = [];
        } else {
            productoLS = JSON.parse(localStorage.getItem('productos'));
        }
        return productoLS;
    }

    eliminarProductoLocalStorage(productoID){
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function(productosLS, index){
            if(productosLS.id === productoID){
                productosLS.splice(index, 1);
            }
        });

        localStorage.setItem('productos', JSON.stringify(productosLS));
    }

    leerProductosLocalStorage(){
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function(producto){
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>
                <img src="${producto.imagen}" width=100>    
            </td>
            <td> ${producto.nombre}  </td>
            <td> ${producto.cantidad}  </td>
            <td> ${producto.precio}  </td>
            <td>
                <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
            </td>
        `;
        listaProductosCarrito.appendChild(row);
        });
    }

    vaciarLocalStorage(){
        localStorage.clear();
    }

    comprar(){
        localStorage.clear();
        window.location.reload();
        window.alert("FELICIDADES !!! Ha realizado la compra");
    }
}
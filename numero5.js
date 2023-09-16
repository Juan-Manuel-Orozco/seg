// Definimos los productos con nombre, precio y stock
const productos = [
    { nombre: "Producto 1", precio: 10, stock: 5 },
    { nombre: "Producto 2", precio: 20, stock: 10 },
    { nombre: "Producto 3", precio: 30, stock: 8 },
  ];
  
  // Inicializamos el carrito de compras como un arreglo vacío
  const carrito = [];
  
  // Función para agregar un producto al carrito
  function agregarProductoAlCarrito(producto) {
    // Verificamos si el producto está en stock
    if (producto.stock > 0) {
      // Buscamos el producto en el carrito
      const productoEnCarrito = carrito.find(item => item.nombre === producto.nombre);
  
      if (productoEnCarrito) {
        // Si el producto ya está en el carrito, aumentamos la cantidad
        productoEnCarrito.cantidad++;
      } else {
        // Si no está en el carrito, lo agregamos con cantidad 1
        carrito.push({ ...producto, cantidad: 1 });
      }
  
      // Restamos 1 al stock del producto
      producto.stock--;
  
      console.log(`${producto.nombre} agregado al carrito.`);
    } else {
      console.log(`Lo sentimos, ${producto.nombre} está agotado.`);
    }
  }
  
  // Función para calcular el precio subtotal de un producto en el carrito
  function calcularSubtotal(producto) {
    return producto.precio * producto.cantidad;
  }
  
  // Función para calcular el precio total de la compra
  function calcularTotalCompra() {
    let total = 0;
  
    for (const item of carrito) {
      total += calcularSubtotal(item);
    }
  
    return total;
  }
  
  // Función para mostrar el carrito y el total de la compra
  function mostrarCarritoYTotal() {
    console.log("Carrito de Compras:");
    for (const item of carrito) {
      console.log(`${item.nombre} - Cantidad: ${item.cantidad} - Precio unitario: $${item.precio} - Subtotal: $${calcularSubtotal(item)}`);
    }
    console.log(`Total de la compra: $${calcularTotalCompra()}`);
  }
  
  // Ejemplo de uso
  agregarProductoAlCarrito(productos[0]); // Agregamos Producto 1 al carrito
  agregarProductoAlCarrito(productos[1]); // Agregamos Producto 2 al carrito
  agregarProductoAlCarrito(productos[0]); // Agregamos otro Producto 1 al carrito
  mostrarCarritoYTotal(); // Mostramos el contenido del carrito y el total de la compra
  
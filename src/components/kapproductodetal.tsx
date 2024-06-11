const ProductoDetalle = ({ producto }) => {
    return (
      <div className="border p-4 rounded shadow">
        <img src={`/img/productos/${producto.imagen}`} alt={producto.nombre} className="h-32 w-full object-cover mb-2" />
        <h3 className="text-lg font-semibold">{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
        <p className="text-green-700">Proveedor: {producto.proveedor}</p>
        <p className="text-green-700">Precio: {producto.precio}€</p>
        <p className="text-green-700">Stock: {producto.stock}</p>
      </div>
    );
  };
  
  export default ProductoDetalle;
  
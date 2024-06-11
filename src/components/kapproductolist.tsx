import { useState, useEffect } from 'react';

const ProductosList = ({ selectedGama, setSelectedProducto }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    if (selectedGama) {
      fetch(`http://localhost:3000/api/productos?gama=${selectedGama}`)
        .then(response => response.json())
        .then(data => setProductos(data));
    }
  }, [selectedGama]);

  return (
    <div>
      {selectedGama && (
        <>
          <h2 className="text-xl font-bold p-4">{selectedGama}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {productos.map(producto => (
              <div key={producto.id} className="border p-4 rounded shadow" onClick={() => setSelectedProducto(producto)}>
                <img src={`/img/productos/${producto.imagen}`} alt={producto.nombre} className="h-32 w-full object-cover mb-2" />
                <h3 className="text-lg font-semibold">{producto.nombre}</h3>
                <p className="text-green-700">{producto.precio}€</p>
                <p className="text-sm text-gray-600">{producto.stock} en Stock</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductosList;

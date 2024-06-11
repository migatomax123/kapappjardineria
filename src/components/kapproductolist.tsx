import React from 'react';
import Image from 'next/image';

interface Product {
  code: number;
  name: string;
  stock: number;
  price: number;
  provider: string;
  image: string;
}

const KapProductoList: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.code} className="border p-4 rounded-lg shadow-md">
          <Image
            src={`http://localhost:3001/img/productos/${product.image}`}
            alt={product.name}
            width={500}
            height={500}
          />
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p>Código: {product.code}</p>
          <p>Stock: {product.stock}</p>
          <p>Precio: {product.price} €</p>
          <p>Proveedor: {product.provider}</p>
        </div>
      ))}
    </div>
  );
};

export default KapProductoList;

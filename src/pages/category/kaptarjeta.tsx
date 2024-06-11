import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Menu from '../../components/kapgamasmenu';
import KapProductoList from '../../components/kapproductolist';

interface Product {
  code: number;
  name: string;
  stock: number;
  price: number;
  provider: string;
  image: string;
}

const CategoryPage: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedGama, setSelectedGama] = useState<string | null>(null);

  useEffect(() => {
    if (name) {
      fetch(`http://localhost:3000/api/products?category=${name}`)
        .then(response => response.json())
        .then(data => setProducts(data));
    }
  }, [name]);

  return (
    <div>
      <Menu setSelectedGama={setSelectedGama} />
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold my-4">{name}</h1>
        <KapProductoList products={products} />
      </div>
    </div>
  );
};

export default CategoryPage;


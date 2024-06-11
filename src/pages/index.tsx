import React, { useState } from 'react';
import Menu from '../components/kapgamasmenu';

const HomePage: React.FC = () => {
  const [selectedGama, setSelectedGama] = useState<string | null>(null);

  return (
    <div>
      <Menu setSelectedGama={setSelectedGama} />
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold my-4">Productos</h1>
        {selectedGama ? (
          <p>Mostrando productos de la gama: {selectedGama}</p>
        ) : (
          <p>Seleccione una gama para ver los productos</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;

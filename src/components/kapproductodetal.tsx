import React from 'react';
import Image from 'next/image';

const KapProductoDetal: React.FC = () => {
  // Supongamos que tienes un producto con una propiedad de imagen
  const product = {
    image: '/path/to/image.jpg',
    // otras propiedades...
  };

  return (
    <div>
      <Image
        src={product.image}
        alt="Descripción de la imagen"
        width={500}
        height={500}
      />
      {/* otros elementos... */}
    </div>
  );
};

export default KapProductoDetal;

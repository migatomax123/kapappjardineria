import { useState } from 'react';

interface FormData {
  codigo: string;
  nombre: string;
  descripcion: string;
  proveedor: string;
  stock: string;
  poste: string;
  imagen: string;
  pvp: string;
  codgama: string;
}

const NuevoProducto: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    codigo: '',
    nombre: '',
    descripcion: '',
    proveedor: '',
    stock: '',
    poste: '',
    imagen: '',
    pvp: '',
    codgama: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('http://localhost:3000/api/productos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold">Nuevo Producto</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="codigo"
          placeholder="Código"
          value={formData.codigo}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="text"
          name="descripcion"
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="text"
          name="proveedor"
          placeholder="Proveedor"
          value={formData.proveedor}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="text"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="text"
          name="poste"
          placeholder="Poste"
          value={formData.poste}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="text"
          name="imagen"
          placeholder="Imagen URL"
          value={formData.imagen}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="text"
          name="pvp"
          placeholder="PVP"
          value={formData.pvp}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="text"
          name="codgama"
          placeholder="Gama"
          value={formData.codgama}
          onChange={handleChange}
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Guardar</button>
      </form>
    </div>
  );
};

export default NuevoProducto;

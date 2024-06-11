import { useState } from 'react';

const NuevoProducto = () => {
  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
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
        <input type="text" name="codigo" placeholder="Código" onChange={handleChange} className="border p-2" />
        <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} className="border p-2" />
        <input type="text" name="descripcion" placeholder="Descripción" onChange={handleChange} className="border p-2" />
        <input type="text" name="proveedor" placeholder="Proveedor" onChange={handleChange} className="border p-2" />
        <input type="text" name="stock" placeholder="Stock" onChange={handleChange} className="border p-2" />
        <input type="text" name="poste" placeholder="Poste" onChange={handleChange} className="border p-2" />
        <input type="text" name="imagen" placeholder="Imagen URL" onChange={handleChange} className="border p-2" />
        <input type="text" name="pvp" placeholder="PVP" onChange={handleChange} className="border p-2" />
        <input type="text" name="codgama" placeholder="Gama" onChange={handleChange} className="border p-2" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Guardar</button>
      </form>
    </div>
  );
};

export default NuevoProducto;

import { useState, useEffect } from 'react';

const GamasMenu = ({ setSelectedGama }) => {
  const [gamas, setGamas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/gama')
      .then(response => response.json())
      .then(data => setGamas(data));
  }, []);

  return (
    <div className="flex space-x-4 p-4 bg-green-200">
      {gamas.map(gama => (
        <button
          key={gama.id}
          className="text-green-700 hover:text-green-900"
          onClick={() => setSelectedGama(gama.nombre)}
        >
          {gama.nombre}
        </button>
      ))}
    </div>
  );
};

export default GamasMenu;

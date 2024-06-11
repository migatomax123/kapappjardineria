import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Category {
  id: number;
  name: string;
}

interface MenuProps {
  setSelectedGama: React.Dispatch<React.SetStateAction<string | null>>;
}

const Menu: React.FC<MenuProps> = ({ setSelectedGama }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <nav className="bg-green-500 p-4">
      <ul className="flex space-x-4">
        {categories.map(category => (
          <li key={category.id}>
            <button
              className="text-white"
              onClick={() => setSelectedGama(category.name)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;

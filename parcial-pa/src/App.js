import React, { useEffect, useState } from 'react';
import Filter from './components/Filter';
import ProductCard from './components/ProductCard';
import Products from './components/Products';
import Header from './components/ui/Header';

function App() {

  const [categoria, guardarCategoria] = useState('');
  const [productos, guardarProducto] = useState([]);

  useEffect( () => {
    const consultarAPI = async () => {
      const url = `https://api.mercadolibre.com/sites/MLA/search?category=${categoria}&limit=30`;

      const respuesta = await fetch(url);
      const productos = await respuesta.json();

      guardarProducto(productos.results);
    }

    consultarAPI();
  }, [categoria])

  return (
    <>
      <Header />
      <div className="row black">
        <Filter 
          guardarCategoria={guardarCategoria}
        />
      </div>
      
      <Products 
        productos={productos}
      />
    </>
  );
}

export default App;

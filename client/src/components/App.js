import React , { useEffect, useState }from 'react';
import NavBar from './NavBar';
import Products from './Products';


function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products')
    .then(r => {
      if(r.ok){
        r.json().then(products => setProducts(products))
      }
    })
  },[]);

  return (
    <div>
      <NavBar/>
      <Products products={products}/>
    </div>
  );
};

export default App;

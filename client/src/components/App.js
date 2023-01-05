import React , { useEffect, useState }from 'react';
import NavBar from './NavBar';
import Products from './Products';
import Header from './Header';


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
      <Header/>
      <Products products={products}/>
    </div>
  );
};

export default App;

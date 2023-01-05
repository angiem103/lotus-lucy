import React , { useEffect, useState }from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Products from './Products';
import SignUp from './SignUp';


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
    <div >
      <NavBar/>
        <Routes> 
          <Route path='/' element={<Products products={products}/>} />
          <Route path='/signup' element={ <SignUp/ >}/>
        </Routes>
    </div>
  );
};

export default App;

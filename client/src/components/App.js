import React , { useEffect, useState }from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Products from './Products';
import SignUp from './SignUp';
import Login from './Login';


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
          <Route path='/signup' element={ <SignUp/>}/>
          <Route path='/login' element={ <Login />}/>
        </Routes>
    </div>
  );
};

export default App;

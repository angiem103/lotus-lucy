import React , { useEffect, useState }from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Products from './Products';
import SignUp from './SignUp';
import Login from './Login';


function App() {

  const [currentUser, setCurrentUser] = useState('');
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('/products')
    .then(r => {
      if(r.ok){
        r.json().then(products => setProducts(products))
      }
    })
  },[]);

  function handleLogin(user) {
    setCurrentUser(user)
  }

  return (
    <div >
      <NavBar/>
        <Routes> 
          <Route path='/' element={<Products products={products}/>} />
          <Route path='/signup' element={ <SignUp/>}/>
          <Route path='/login' element={ <Login onLogin={handleLogin}/>}/>
        </Routes>
    </div>
  );
};

export default App;

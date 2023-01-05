import React , { createContext, useEffect, useState }from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Products from './Products';
import SignUp from './SignUp';
import Login from './Login';


export const LoginContext = createContext()

function App() {

  const [currentUser, setCurrentUser] = useState('');
  const [products, setProducts] = useState([]);
  
  console.log(currentUser)

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
    <div>
      <LoginContext.Provider value={{currentUser,setCurrentUser}}>
      <NavBar/>
        <Routes> 
          <Route path='/' element={<Products products={products}/>} />
          <Route path='/signup' element={ <SignUp/>}/>
          <Route path='/login' element={ <Login onLogin={handleLogin}/>}/>
        </Routes>
      </LoginContext.Provider>
    </div>
  );
};

export default App;

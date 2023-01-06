import React , { createContext, useEffect, useState }from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Products from './Products';
import SignUp from './SignUp';
import Login from './Login';
import MyOrders from './MyOrders';


export const LoginContext = createContext();
export const InfoContext = createContext();

function App() {

  const [currentUser, setCurrentUser] = useState();
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  
  
  useEffect(() => {
    fetch('/auth')
    .then(r => {
      if(r.ok) {
        r.json().then(user => {
          setCurrentUser(user)
        })
      } 
    })
  }, []);

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
        <InfoContext.Provider value={{products,cartItems, setCartItems}}>
          <NavBar/>
          <Routes> 
            <Route path='/' element={<Products products={products}/>} />
            <Route path='/signup' element={ <SignUp/>}/>
            <Route path='/login' element={ <Login onLogin={handleLogin}/>}/>
            <Route path='/myorders' element= { <MyOrders />} />
          </Routes>
        </InfoContext.Provider>
      </LoginContext.Provider>
    </div>
  );
};

export default App;

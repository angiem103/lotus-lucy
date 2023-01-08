import React , { createContext, useEffect, useState }from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Products from './Products';
import SignUp from './SignUp';
import Login from './Login';
import MyOrders from './MyOrders';
import EditOrder from './EditOrder';
import NewProduct from './NewProduct';


export const LoginContext = createContext();
export const InfoContext = createContext();

function App() {

  const [currentUser, setCurrentUser] = useState();
  const [userOrders, setUserOrders] = useState()
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    fetch('/auth')
    .then(r => {
      if(r.ok) {
        r.json().then((user)=> {
          setCurrentUser(user)
          setUserOrders(user.orders)
      })
    }
    })
  }, []);

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
      <LoginContext.Provider value={{currentUser,setCurrentUser, userOrders, setUserOrders}}>
        <InfoContext.Provider value={{products,setProducts,cartItems, setCartItems}}>
          <NavBar/>
          <Routes> 
            <Route path='/' element={<Products products={products}/>} />
            <Route path='/signup' element={ <SignUp/>}/>
            <Route path='/login' element={ <Login onLogin={handleLogin}/>}/>
            <Route path='/myorders' element= { <MyOrders />} />
            <Route path='/editorder/:id' element= { <EditOrder />} />
            <Route path='newproduct' element= { <NewProduct />} />
          </Routes>
        </InfoContext.Provider>
      </LoginContext.Provider>
    </div>
  );
};

export default App;

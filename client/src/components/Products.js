import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import Header from './Header';
import Row from 'react-bootstrap/Row';
import { InfoContext } from './App';


function Products( {products} ) {

    const {cartItems, setCartItems} = useContext(InfoContext);

    function addToCart(product) {
        const item = {
          product_id: product.id,
          quatity:1
        }
        setCartItems([...cartItems, item])
    };

    const renderProducts = products.map((product) => {
       return <ProductCard key={product.id} product={product} addToCart={addToCart} />
    });

    return (
        <div>
        <Header />
        <div>
            <Row xs={3} md={3} className="g-4">
                {renderProducts}
            </Row>
        </div>
       </div>
    );
}

export default Products;
import React from 'react';
import ProductCard from './ProductCard';
import Header from './Header';
import Row from 'react-bootstrap/Row';


function Products( {products} ) {

    const renderProducts = products.map((product) => {
       return <ProductCard key={product.id} product={product} />
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
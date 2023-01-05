import React from 'react';
import ProductCard from './ProductCard';
import Row from 'react-bootstrap/Row';


function Products( {products} ) {

    const renderProducts = products.map((product) => {
       return <ProductCard key={product.id} product={product} />
    });

    return (

            <Row xs={3} md={3} className="g-4">


                    {renderProducts}


            </Row>
          
    );
}

export default Products;
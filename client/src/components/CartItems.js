import React, { useContext } from "react";
import { InfoContext } from "./App";

function CartItems( { item }) {

    const {products} = useContext(InfoContext);

    const product = products.find(product => product.id === item.product_id)

    return(
        <p style={{color: "white"}}>{product.name} X {item.quantity} = ${item.quantity * product.price}</p>
    )
}

export default CartItems
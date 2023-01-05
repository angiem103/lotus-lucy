import React, { useContext } from "react";
import { LoginContext } from "./App";
import PastOrderCard from "./PastOrderCard";
import Row from 'react-bootstrap/Row';

function MyOrders() {

    const {currentUser} = useContext(LoginContext)
    console.log(currentUser)

    const renderOrders = currentUser && currentUser.orders ? currentUser.orders.map(order => <PastOrderCard key={order.id} order={order} />) : undefined

    console.log(renderOrders)

    return (
        <div>
        <h1 style={{color: "white"}}>My Orders</h1>
        <div>
            <Row xs={3} md={3} className="g-4">
                {renderOrders}
            </Row>
        </div>
       </div>
    )
};

export default MyOrders;
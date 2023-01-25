import React, { useContext, useState, useEffect } from "react";
import { LoginContext } from "./App";
import PastOrderCard from "./PastOrderCard";
import Row from 'react-bootstrap/Row';
import Loader from "./Loader";

function MyOrders() {

    const headerStyle = {
        color: 'white',
        height: '150px',
        textAlign: 'center',
        paddingTop: '50px',
        fontFamily: 'andale mono, monospace',
        fontSize: '40px',
    };

    const {userOrders, setUserOrders } = useContext(LoginContext);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
        }, 500)
    })

    function deleteOrder(deletedOrder) {
        const filteredOrders = userOrders.filter(order => order.id !== deletedOrder.id )
        setUserOrders([...filteredOrders])  
    };

    
    const renderOrders = userOrders ? userOrders.map(order => <PastOrderCard key={order.total_cost} order={order} onOrderDelete={deleteOrder}/>) : undefined



    return isLoading ? <Loader/> : (
        <div>
        <h1 style={headerStyle}>MY ORDERS</h1>
        <div style={{padding: "30px"}}>
            <Row xs={3} md={3} className="g-4">
                {renderOrders}
            </Row>
        </div>
       </div>
    )
};

export default MyOrders;
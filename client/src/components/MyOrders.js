import React, { useContext } from "react";
import { LoginContext } from "./App";
import PastOrderCard from "./PastOrderCard";
import Row from 'react-bootstrap/Row';

function MyOrders() {

    const headerStyle = {
        color: 'white',
        height: '150px',
        textAlign: 'center',
        paddingTop: '50px',
        fontFamily: 'andale mono, monospace',
        fontSize: '40px',
    };

    const {currentUser} = useContext(LoginContext);

    const renderOrders = currentUser && currentUser.orders ? currentUser.orders.map(order => <PastOrderCard key={order.id} order={order} />) : undefined

    return (
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
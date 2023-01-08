import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DetailCard from "./DetailCard";
import { useParams, useNavigate } from "react-router-dom";
import { LoginContext } from "./App";




function EditOrder () {

    const formStyle = {
        backgroundColor: 'rgb(30, 31, 31)',
        width: '50%',
        color: 'white',
        padding: '10px',
        borderRadius: '20px'
    };

    const headerStyle = {
        color: 'white',
        height: '150px',
        textAlign: 'center',
        paddingTop: '50px',
        fontFamily: 'andale mono, monospace',
        fontSize: '50px',
    };

    const {userOrders} = useContext(LoginContext);

    const navigate = useNavigate();
    const params = useParams();

    const order = userOrders ? userOrders.find((order) => String(order.id) === params.id) : undefined
    
    const renderDetails = userOrders && order ? order.order_details.map((details) => {
       return <DetailCard details={details} order={order}/>
    }) : null


   function handleSubmit(e) {
        e.preventDefault()

        order.order_details.forEach((detail) => {
            const newDet = {
                id: detail.id,
                product_id: detail.product_id,
                order_id: detail.order_id,
                quantity: detail.quantity
            }
        fetch(`/order_details/${detail.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newDet)
        })
        .then(r => {
            if(r.ok){
                r.json().then(navigate('/myorders'))
            } 
        })
        })
    }


    return (
        <div  className="row h-100 justify-content-center align-items-center" style={{paddingBottom: '10px', fontFamily: 'andale mono, monospace'}}>
            <h1 style={headerStyle}>CHANGE ORDER</h1>
            <Form style={formStyle} onSubmit={handleSubmit}>
            {renderDetails}
            <Button variant="dark" type="submit" onSubmite={handleSubmit}>
                Update Cart
             </Button>
             <br></br>
            </Form>
        </div>
      );
}

export default EditOrder;
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './Checkout.css'

function Checkout({checkout}){
    let total;
    const activeOrder = useSelector(store => store.order);
    const activeCart = useSelector(store => store.cart);
    const [databaseOrder, setDatabaseOrder] = useState({})
    const dispatch = useDispatch();

    console.log('activeCart', activeOrder)

    const handleCheckout = () => {

        setDatabaseOrder({
            customer_name: activeOrder.name,
            street_address: activeOrder.street_address,
            city: activeOrder.city,
            // zip,
            // type,
            total: activeCart.total
            // pizzas:
        });

        checkout(databaseOrder); //?????????

        dispatch({
            type: 'SET_CHECKOUT',
        })

    }

    return(
        <>
        <h2>Step 3: Checkout</h2>
        {/* customer info */}
        <h3>{activeOrder.customer_name}</h3>
        <h3>{activeOrder.street_address}</h3>
        <h3>{activeOrder.city}</h3>
    <div id="container">
    <table id="orderTable">
            <thead id="orderHead">
                <tr className="orderRow">
                    <td id='name'>Name</td>
                    <td id='cost'>Cost</td>
                </tr>
            </thead>
            <tbody>
                {/* pizza info */}
                {activeCart.map(pizza => {
                    <tr>
                        <td>{pizza.name}</td>
                        <td>{pizza.price}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>

            <h4>Total: {activeCart.total}</h4>
        <button onClick={handleCheckout}>CHECKOUT</button>
        </>
    )
}

export default Checkout;
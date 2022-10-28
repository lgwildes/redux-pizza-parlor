import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import './Checkout.css'

function Checkout({checkout}){
    const activeOrder = useSelector(store => store.order);
    const activeCart = useSelector(store => store.cart);
    const activeTotal = useSelector(store => store.total)
    const [databaseOrder, setDatabaseOrder] = useState({});
    const history = useHistory();
    const dispatch = useDispatch();

    console.log('active Cart', activeCart);
    console.log('active Order', activeOrder);

    useEffect(() => {
        setDatabaseOrder({
            customer_name: activeOrder.customer_name,
            street_address: activeOrder.street_address,
            city: activeOrder.city,
            zip: activeOrder.zip,
            type: activeOrder.type,
            total: activeTotal,
            pizzas: activeCart
        });
    }, [])

    const handleCheckout = () => {

        checkout(databaseOrder); //?????????

        dispatch({
            type: 'SET_CHECKOUT',
        })

        history.push('/');

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
                    <td>Quantity</td>
                    <td id='cost'>Cost</td>
                </tr>
            </thead>
            <tbody>
                {/* pizza info */}
                {activeCart.map(pizza => {
                    return(<tr key={pizza.id}>
                        <td>{pizza.name}</td>
                        <td>{pizza.quantity}</td>
                        <td>{pizza.price}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    </div>

            <h4>Total: {activeTotal}</h4>
        <button onClick={handleCheckout}>CHECKOUT</button>
        </>
    )
}

export default Checkout;
import { useSelector } from "react-redux";
import './Admin.css';

function Admin() {

    const orderList = useSelector(({ orderList }) => orderList)

    return (
        <table id="orderTable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {orderList.map(order =>
                    <tr key={order.id}>
                        <td>{order.customer_name}</td>
                        <td>{order.time}</td>
                        <td>{order.type}</td>
                        <td>{order.total}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Admin;
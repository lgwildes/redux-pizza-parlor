import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PizzaItem from "./PizzaItem/PizzaItem";
import './PizzaList.css';

function PizzaList() {
    const [inCart, setCart] = useState([]);
    const pizzaList = useSelector(({ pizzaList }) => pizzaList);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = (pizza) => {
        if (inCart.map(x => x.id).includes(pizza.id)) {
            setCart(inCart.filter(y => y.id != pizza.id));
            dispatch({ type: 'SUB_TOTAL', payload: Number(pizza.price) })
        }
        else {
            setCart(inCart.concat({...pizza, quantity: 1}));
            dispatch({ type: 'ADD_TOTAL', payload: Number(pizza.price) })
        }
    }

    const submit = () => {
        dispatch({ type: 'ADD_PIZZAS', payload: inCart });
        history.push('/info');
    }

    console.log(inCart);

    return (
        <div id="pizzaList">
            {pizzaList.map(pizza => <PizzaItem key={pizza.id} pizza={pizza} handleClick={handleClick} />)}
            <div className="nextBtn"><button onClick={submit} id="pizzaNext">NEXT</button></div>
        </div>
    )
}

export default PizzaList;
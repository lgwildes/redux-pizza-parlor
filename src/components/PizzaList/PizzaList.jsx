import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PizzaItem from "./PizzaItem/PizzaItem";
import './PizzaList.css';

function PizzaList() {
    const [inCart, setCart] = useState([]);
    const pizzaList = useSelector(({pizzaList}) => pizzaList);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = (id) => {
        inCart.includes(id) ? setCart(inCart.filter(x => x != id)) : setCart(inCart.concat(id));
    }

    const submit = () => {
        const chosenPizzas = {pizzas: pizzaList.filter(pizza => inCart.includes(pizza.id)).map(chosenPizza => ({id:chosenPizza.id, name:chosenPizza.name, quantity:1, price:chosenPizza.price}))}
        chosenPizzas.total = chosenPizzas.pizzas.reduce((prev, next) => prev += Number(next.price), 0);
        console.log(chosenPizzas);
        dispatch({type:'ADD_PIZZAS', payload:chosenPizzas});
        history.push('/info');
    }

    console.log(inCart);

    return (
        <div id="pizzaList">
            {pizzaList.map(pizza => <PizzaItem key={pizza.id} pizza={pizza} handleClick={handleClick}/>)}
            <button onClick={submit} id="pizzaNext">NEXT</button>
        </div>
    )
}

export default PizzaList;
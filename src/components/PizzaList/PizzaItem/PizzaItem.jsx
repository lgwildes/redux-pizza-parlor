import './PizzaItem.css';
import { useState } from 'react';

function PizzaItem({pizza, handleClick}) {

    const {name, description, price, image_path} = pizza;
    const [toggleButton, setToggle] = useState(true);
    const togglePizza = () => {
        handleClick(pizza);
        setToggle(!toggleButton);
    }

    return (
        <div className="pizzaItem">
            <img src={image_path}></img>
            <p>{name}: {description} ; {price}</p>
            { toggleButton &&
                <button onClick={togglePizza}>ADD</button>
            }
            { !toggleButton &&
                <button onClick={togglePizza}>REMOVE</button>
            }
        </div>
    )
}

export default PizzaItem;
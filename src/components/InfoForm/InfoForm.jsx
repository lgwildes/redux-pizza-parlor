import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import './InfoForm.css';

function InfoForm({ addNewCustomerInfo }) {

    const total = useSelector(store => store.total)
    const history = useHistory();
    const dispatch = useDispatch();

    let [customerInfo, setCustomerInfo] = useState({customer_name:'', street_address:'', city:'', zip:'', type:'', total:total})

    // when user types in any input it is handled by these event handlers and updates state
    const handleNameChange = (event) => {
        setCustomerInfo({
            ...customerInfo,
            customer_name: event.target.value,

        })
        //console.log('name change is ', event.target.value);
    }

    const handleAddressChange = (event) => {
        setCustomerInfo({
            ...customerInfo,
            street_address: event.target.value,
        })
        //console.log('address change is ', event.target.value);
    }

    const handleCityChange = (event) => {
        setCustomerInfo({
            ...customerInfo,
            city: event.target.value,
        })
        //console.log('city change is ', event.target.value);
    }

    const handleZipChange = (event) => {
        setCustomerInfo({
            ...customerInfo,
            zip: event.target.value,
        })
        //console.log('zip change is ', event.target.value);
    }
    // type is set to either pickup or delivery depending on button clicked
    const handlePickup = (event) => {
        setCustomerInfo({
            ...customerInfo,
            type: 'Pickup',
        })
        console.log('type is Pickup')
    }

    const handleDelivery = (event) => {
        setCustomerInfo({
            ...customerInfo,
            type: 'Delivery',
        })
        console.log('type is Delivery')
    }


    const addCustomerInfo = (event) => {
        event.preventDefault();
        console.log(`adding customer `, customerInfo)
            
        dispatch({
                type: 'ADD_INFO',
                payload: customerInfo
            })

        history.push('/checkout')

    }


    return (

        <>
            <h2>Step 2: Customer Information</h2>

            <form className="form" onSubmit={(event) => addCustomerInfo(event)}>
                <input
                    onChange={handleNameChange}
                    type="text"
                    placeholder="Name" />

                <input
                    onChange={handleAddressChange}
                    type="text"
                    placeholder="Street Address" />

                <input
                    onChange={handleCityChange}
                    type="text"
                    placeholder="City" />

                <input
                    onChange={handleZipChange}
                    type="text"
                    placeholder="Zip" />
                <div className='radio'>
                <input
                   
                    onChange={handlePickup}
                    type="radio"
                    name="type" />
                <label>Pickup</label>

                <input
                    onChange={handleDelivery}
                    type="radio"
                    name="type" />
                <label>Delivery</label>
                </div>

                <button
                    className='button'
                    type="submit">Next</button>

            </form>
        </>
    )
}

export default InfoForm;
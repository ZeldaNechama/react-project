import React, { useState } from "react";
// import { useParams } from 'react-router-dom';
// import { cusumers } from '../../cusetemers';
import { createService, deleteService } from '../services/api';
import config from '../../config/config';

// import './serivce.css';

export const Service = () => {
    const [name, setName] = useState('');
    const [descerpetion, setDescerpetion] = useState('');
    const [price, setPrice] = useState('');
    const [time, setTime] = useState('');
    const [amountOfmeatings, setAmountOfmeatings] = useState('');

    const saveInfo = (event) => {
        event.preventDefault();

        const service = {
            business_id: config.businessId,
            name: name,
            service: {
                descerpetion: descerpetion,
                price: price,
                time: time,
                AmountOfmeatings: amountOfmeatings
            }
        };

        console.log(service);
        createService(service);
    };

    const delService = (event) => {
        event.preventDefault();

        const id = event.target.elements.id.value;

        deleteService(id);
    };

    return (
        <div>
            <div>
                <form onSubmit={saveInfo}>
                    <div>
                        <label htmlFor="name">enter name of service</label>
                        <input 
                            type="text" 
                            id="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label htmlFor="descerpetion">enter a descerpetion</label>
                        <input 
                            type="text" 
                            id="descerpetion" 
                            value={descerpetion} 
                            onChange={(e) => setDescerpetion(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label htmlFor="price">enter price</label>
                        <input 
                            type="number" 
                            id="price" 
                            value={price} 
                            onChange={(e) => setPrice(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label htmlFor="time">amount of time</label>
                        <input 
                            type="number" 
                            id="time" 
                            value={time} 
                            onChange={(e) => setTime(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label htmlFor="amountOfmeatings">amount of  meatings</label>
                        <input 
                            type="number" 
                            id="amountOfmeatings" 
                            value={amountOfmeatings} 
                            onChange={(e) => setAmountOfmeatings(e.target.value)} 
                        />
                    </div>
                    <button type="submit">create a new service</button>
                </form>
            </div>
            <div>
                <form onSubmit={delService}>
                    <div>
                        <label htmlFor="id">enter id to delete a service</label>
                        <input type="text" id="id" />
                    </div>
                    <button type="submit">delete</button>
                </form>
            </div>
        </div>
    );
};

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import {  toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CheckOut = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);
    
    // const [user, setUser] = useState({
    //     name: 'ahsan',
    //     email: 'mowuj92@gmail.com',
    //     address: 'dhaka',
    //     phone: '01939141710'
    // });
    // const handleAddressChange = event => {
    //     console.log(event.target.value);
    //     const { address, ...rest } = user;
    //     const newAddress = event.target.value;
    //     const newUser = {address: newAddress, ...rest };
    //     console.log(newUser);
    //     setUser(newUser);
    // }
    const handlePaleOder = event => {
        event.preventDefault()
        const order = {
            email:user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.value,
            phone:event.target.value

        }
        axios.post('https://rocky-sea-46908.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!!')
                    event.target.reset();
                }
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: { service.name}</h2>
            <form onSubmit={handlePaleOder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name='name' placeholder='Name' required readOnly disabled/>
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name='email' placeholder='email' required readOnly disabled/>
                <br />
                <input className='w-100 mb-2' type="text" readOnly value={service.name} name='service' placeholder='service' required />
                <br />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='phone' required autoComplete='off'/>
                <br />
                <input className='w-100 mb-2' type="text"  name='address' placeholder='address' required autoComplete='off'/>
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
            <ToastContainer />
        </div>
        
    );
};

export default CheckOut;
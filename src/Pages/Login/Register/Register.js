import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
const Register = () => {
    const navigate = useNavigate();
    const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigateLogin = () => {
        navigate('/login');
    }
    if (user) {
        navigate('/')
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password)
        createUserWithEmailAndPassword(email,password)
    }
    return (
        <div className='register-form'>
            <h2 style={{textAlign:'center'}}>Please Register</h2>
            <form action="" onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Email Address' required/>
                
                <input type="password" name="password" id="" placeholder='Password'required/>
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">Accept Genius Car Terms and Condition</label>
                <input className='btn btn-primary w-50 mx-auto mt-2' type="submit" value="Register" />
            </form>
            <p>Already Have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default Register;
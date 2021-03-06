import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';
const Register = () => {
    const [agree,setAgree] =useState(false)
    const navigate = useNavigate();
    const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user);
    const navigateLogin = () => {
        navigate('/home');
    }
    if (loading || updating) {
    return <Loading></Loading>
    }
    if (token) {
        navigate('/home');
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        
        await createUserWithEmailAndPassword(email,password)
        await updateProfile({ displayName:name });
        console.log('Updated profile');
        
        
        
    }
    return (
        <div className='register-form'>
            <h2 style={{textAlign:'center'}}>Please Register</h2>
            <form action="" onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Email Address' required/>
                
                <input type="password" name="password" id="" placeholder='Password'required/>
                <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree?'ps-2 text-primary':'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Condition</label> */}
                <label className={`ps-2 ${agree?'':'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Condition</label>
                <input
                    disabled={!agree}
                    className='btn btn-primary w-50 mx-auto mt-2'
                    type="submit" value="Register" />
            </form>
            <p>Already Have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Login</Link></p>
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default Register;
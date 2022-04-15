import React from 'react';
import google from '../../../Images/social/google.png'
import facebook from '../../../Images/social/facebook.png'
import github from '../../../Images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    let errorElement;
    if (error || error1) {
        errorElement=<p className='text-danger'>Error: {error?.message}{error1?.message }</p>

    
    }
    if (loading || loading1) {
    return <Loading></Loading>
    }
    if (user || user1) {
        navigate('/home');
  }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button
                    onClick={()=>signInWithGoogle()}
                    className='btn btn-info d-block w-50  mx-auto my-2'>
                    <img style={{width:'30px'}} src={google} alt="" />
                    <span className=''>Google Sign In</span>
                </button>
            </div>
            <div className=''>
                <button
                    
                    className='btn btn-info d-block w-50  mx-auto my-2'>
                    <img style={{width:'30px'}} src={facebook} alt="" />
                    <span className=''>Facebook Sign In</span>
                </button>
            </div>
            <div className=''>
                <button
                    onClick={()=>signInWithGithub()}
                    className='btn btn-info d-block w-50  mx-auto my-2'>
                    <img style={{width:'30px'}} src={github} alt="" />
                    <span className=''>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogIn;
import React from 'react';
import google from '../../../Images/social/google.png'
import facebook from '../../../Images/social/facebook.png'
import github from '../../../Images/social/github.png'
const SocialLogIn = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
            </div>
            <div className=''>
                <button className='btn btn-info d-block w-50  mx-auto my-2'>
                    <img style={{width:'30px'}} src={google} alt="" />
                    <span className=''>Google Sign In</span>
                </button>
            </div>
            <div className=''>
                <button className='btn btn-info d-block w-50  mx-auto my-2'>
                    <img style={{width:'30px'}} src={facebook} alt="" />
                    <span className=''>Facebook Sign In</span>
                </button>
            </div>
            <div className=''>
                <button className='btn btn-info d-block w-50  mx-auto my-2'>
                    <img style={{width:'30px'}} src={github} alt="" />
                    <span className=''>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogIn;
import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    const location =useLocation()
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
    if (user.providerData[0]?.providerId=='password'&&!user.emailVerified) {
        return <div>
            <h3 className='text-danger'>you Email is not verified </h3>
            <h5 className='text-success'>Please Verify your email address</h5>
            <button className='btn btn-info'
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}
      >
        send Verify email Again
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }
    return children;
};

export default RequireAuth;
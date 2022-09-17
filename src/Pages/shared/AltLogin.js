import React from 'react';
import auth from '../../firebase.init';
import ButtonMe from './ButtonMe';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const AltLogin = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    return (
        <div>
            <div onClick={()=>{signInWithGoogle()}} className='mb-8 text-center'>
                <ButtonMe>Continue with Google</ButtonMe>
            </div>
            <div className='grid grid-cols-3 items-center' style={{gridTemplateColumns: '45% 10% 45%'}}>
                <div className='bg-gray-300 h-[1px]'></div>
                <p className='mx-auto'>or</p>
                <div className='bg-gray-300 h-[1px]'></div>
            </div>
        </div>
    );
};

export default AltLogin;
import React from 'react';
import img from '../../assets/img/Your paragraph text.png'
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className='w-screen h-[50rem] justify-center items-center'>
            <img className='w-[75%] h-full mx-auto' src={img} alt="" />
            <button className='btn bg-[#6330F6] text-white justify-center items-center w-32 flex mx-auto' onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default ErrorPage;
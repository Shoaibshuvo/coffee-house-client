import React from 'react';
import { FaMugHot} from "react-icons/fa6";
import { Link } from 'react-router-dom';
const ProductContainer = () => {
    return (
        <div className='flex flex-col items-center justify-center pt-28 pb-14 text-center'>
            <p className='mb-2'>-- Sip & Savor --</p>
            <h4 className='font-bold text-5xl mb-4 italic'>Our Popular Products</h4>
            <Link to={'/addCoffee'}>
            <button className=' btn flex items-center justify-center gap-2 bg-yellow-600 italic border-2 border-yellow-700'><span className='text-white'>Add Coffee</span><span className='text-black'><FaMugHot></FaMugHot></span></button>
            </Link>

        </div>
    );
};

export default ProductContainer;
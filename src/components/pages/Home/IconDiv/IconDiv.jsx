import React from 'react';
import iconOne from '/images/icons/1.png';
import iconTwo from '/images/icons/2.png';
import iconThree from '/images/icons/3.png';
import iconFour from '/images/icons/4.png';

const IconDiv = () => {
    return (
        <div className='bg-[#ECEAE3]'>
            <div className='lg:px-72 lg:py-14 grid md:grid-cols-4 gap-4'>
            <div>
                <img src={iconOne} alt="" />
                <h4 className='text-4xl font-normal italic mt-4'>Awesome Aroma</h4>
                <p className='mt-2'>You will definitely be a fan of the design & aroma of our coffee</p>
            </div>
            <div>
                <img src={iconTwo} alt="" />
                <h4 className='text-4xl font-normal italic mt-4'>High Quality</h4>
                <p className='mt-2'>We served the coffee to you maintaining the best quality</p>
            </div>
            <div>
                <img src={iconThree} alt="" />
                <h4 className='text-4xl font-normal italic mt-4'>Pure Grades</h4>
                <p className='mt-2'>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div>
                <img src={iconFour} alt="" />
                <h4 className='text-4xl font-normal italic mt-4'>Proper Roasting</h4>
                <p className='mt-2'>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
            </div>
            
        </div>
    );
};

export default IconDiv;
import React from 'react';
import img1 from '/images/cups/Rectangle 10.png';
import img2 from '/images/cups/Rectangle 11.png';
import img3 from '/images/cups/Rectangle 12.png';
import img4 from '/images/cups/Rectangle 13.png';
import img5 from '/images/cups/Rectangle 14.png';
import img6 from '/images/cups/Rectangle 15.png';
import img7 from '/images/cups/Rectangle 16.png';
import img8 from '/images/cups/Rectangle 9.png';
const Follow = () => {
    return (
        <div className='my-10'>
        <div className='text-center mt-20 mb-20'>
            <p className='text-xl'>Follow Us Now</p>
            <h4 className='font-bold text-4xl italic'>Follow on Instagram</h4>
        </div>
        <div className='grid md:grid-cols-4 md:grid-rows-2 gap-2 items-center justify-center'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
        </div>
        </div>
    );
};

export default Follow;
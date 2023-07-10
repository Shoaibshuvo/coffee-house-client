import React from 'react';
import { FaArrowLeft, FaEnvelope, FaFacebook, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhone, FaTwitter } from 'react-icons/fa6';
import errorPage from '/images/404/404.gif';
import logo from '/top-logo.png'
import backgroundHeader from '/images/more/15.jpg'
import background from "/images/more/13.jpg";
import backgroundTwo from "/images/more/15.jpg";
const ErrorPage = () => {
    return (

        <div className='container mx-auto'>
        {/* navArea */}
        <div className="navbar justify-center relative p-0 ">
        <img src={backgroundHeader} alt=""  className="w-full h-24 "/>
        <div className="absolute">
          <img src={logo} alt="" />
          <a className="btn btn-ghost px-0 normal-case text-white text-2xl font-bold italic">
            Coffee House
          </a>
        </div>
      </div>
        {/* navEnd */}
        {/* Main  */}
        <div className='flex flex-col items-center my-6'>
            <div className="mb-5 flex items-center gap-2 ">
            <FaArrowLeft className="text-lg "></FaArrowLeft>
            <h1 className="text-xl font-bold ">Back to Home</h1>
            </div>
            <img src={errorPage} alt="" />
        </div>
        {/* Main end  */}
        {/* footer area  */}

        <div className="relative">
        <img src={background} alt="" className="" />

        <footer className="footer p-10 absolute gap-4 top-0 left-0  text-neutral-content">
          <div className="">
            <h3 className="text-orange-950 italic text-2xl font-extrabold">
              Coffee House
            </h3>
            <p className="text-black my-2">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments to share with your best companion.
            </p>
            <div className="flex gap-3 mb-2">
              <FaFacebook className="w-10 h-10  text-orange-950"></FaFacebook>
              <FaTwitter className="w-10 h-10  text-orange-950"></FaTwitter>
              <FaInstagram className="w-10 h-10  text-orange-950"></FaInstagram>
              <FaLinkedinIn className="w-10 h-10 text-orange-950"></FaLinkedinIn>
            </div>
            <h3 className="my-2 text-orange-950 italic text-2xl font-bold">
              Get in Touch
            </h3>
            <p className="flex  gap-3 items-center text-orange-950">
              <FaPhone></FaPhone> <span>+88 01322 33 3304</span>
            </p>
            <p className="flex  gap-3 items-center text-orange-950">
              <FaEnvelope></FaEnvelope> <span>coffeehouse01@gmail.com</span>
            </p>
            <p className="flex  gap-3 items-center text-orange-950">
              <FaLocationDot></FaLocationDot>{" "}
              <span>3, Wall Street, Washington, United States</span>
            </p>
          </div>
          <div className="gap-0">
            <h3 className="text-2xl font-bold text-orange-950 py-3">
              Connect with Us
            </h3>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered  w-full max-w-xs text-orange-950"
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered  w-full max-w-xs text-orange-950 "
            />
            <br />
            <textarea
              className="textarea textarea-bordered"
              placeholder="Message"
            ></textarea>
            <br />
            <input type="submit" className="btn btn-outline text-orange-950 italic" value="Send Message" />
          </div>
        </footer>
      </div>
      <div className="relative ">
        <img src={backgroundTwo} alt="" className="w-full h-12"/>
        <footer className="footer footer-center p-4  text-base-content absolute top-0 left-0">
          <div>
            <p className="text-white">Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
          </div>
        </footer>
      </div>
        </div>
    );
};

export default ErrorPage;
import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";
import background from "/images/more/13.jpg";
import backgroundTwo from "/images/more/15.jpg";
const Footer = () => {
  return (
    <>
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
            <input type="submit" className="btn btn-primary" value="Send" />
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
    </>
  );
};

export default Footer;

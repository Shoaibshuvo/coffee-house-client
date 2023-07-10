import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import background from "/images/more/11.png";

const SingleItem = () => {
  const coffee = useLoaderData();
  const { _id, name, taste, photo, price, quantity, supplier, category } =
    coffee;
  console.log(coffee);
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content  ">
          <div className="max-w-full">
            <div>
              <Link to={"/"}>
                <div className="mb-5 flex items-center gap-2">
                  <FaArrowLeft className="text-lg "></FaArrowLeft>
                  <h1 className="text-xl font-bold ">Back to Home</h1>
                </div>
              </Link>
            </div>
            <div className="hero min-h-screen bg-[#F4F3F0]">
              <div className="hero-content flex px-2 lg:px-20">
                <img src={photo} alt="" className="w-full lg:w-96" />

                <div className="w-full lg:w-96">
                  <h2 className="text-2xl mb-8">Niceties</h2>
                  <p>
                    <span className="font-semibold">Name:</span>{" "}
                    <span>{name}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Taste:</span>{" "}
                    <span>{taste}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Supplier:</span>{" "}
                    <span>{supplier}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Category:</span>{" "}
                    <span>{category}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Quantity:</span>{" "}
                    <span>{quantity}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Price:</span>{" "}
                    <span>{price}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default SingleItem;

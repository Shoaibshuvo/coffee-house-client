import React from "react";
import background from "/images/more/11.png";
import { FaArrowLeft } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

const AddCoffee = () => {
    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const taste = form.taste.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const newCoffee = {name, supplier, category, taste, price, photo, quantity};
        console.log(newCoffee);

        // send data to the server 
        fetch('http://localhost:5000/coffee', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              title: 'Success!',
              text: 'User Added Successfully',
              icon: 'success',
              confirmButtonText: 'Done'
            })
          }
          
        })
    }
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
              <div className="hero-content flex-col px-2 lg:px-20">
                <div className="text-center">
                  <h1 className="text-5xl font-bold">Add New Coffee</h1>
                  <p className="py-6 px-2 lg:px-10">
                  It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                  </p>
                </div>
                <div className="card flex-shrink-0 w-full    ">
                  <form onSubmit={handleAddCoffee} className="card-body grid md:grid-cols-2">
                    <div className="form-control">
                      <label className="label mb-2">
                        <span className="label-text font-semibold text-xl">Name</span>
                      </label>
                      <input
                        name="name"
                        type="text"
                        placeholder="Enter coffee name"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label mb-2">
                        <span className="label-text font-semibold text-xl">Supplier</span>
                      </label>
                      <input
                        name="supplier"
                        type="text"
                        placeholder="Enter coffee supplier"
                        className="input "
                      />
                    </div>
                    <div className="form-control">
                      <label className="label mb-2">
                        <span className="label-text font-semibold text-xl">Category</span>
                      </label>
                      <input
                        name="category"
                        type="text"
                        placeholder="Enter coffee category"
                        className="input input-bordered"
                      />
                    </div>
                    
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold text-xl">Available Quantity</span>
                      </label>
                      <input
                        name="quantity"
                        type="text"
                        placeholder="Enter coffee quantity"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label mb-2">
                        <span className="label-text font-semibold text-xl">Taste</span>
                      </label>
                      <input
                        name="taste"
                        type="text"
                        placeholder="Enter coffee taste"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label mb-2">
                        <span className="label-text font-semibold text-xl">Price</span>
                      </label>
                      <input
                        name="price"
                        type="text"
                        placeholder="Enter coffee price"
                        className="input input-bordered"
                      />
                    </div>
                    
                    <div className="form-control md:col-span-2">
                      <label className="label mb-2">
                        <span className="label-text font-semibold text-xl">Photo</span>
                      </label>
                      <input
                        name="photo"
                        type="text"
                        placeholder="Enter photo URL"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control mt-6 md:col-span-2">
                      <input className="btn bg-[#D2B48C] text-black italic" type="submit" value="Add Coffee" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCoffee;

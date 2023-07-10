import React from "react";
import { FaEye, FaPen, FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffees = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, taste, photo, price } = coffee;

  
  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.deletedCount > 0){
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            const remaining = coffees.filter(coffee => coffee._id !== id);
            setCoffees(remaining);
          }
        })
      }
    })
  }
  return (
    <>
      <div className="grid grid-cols-5 items-center">
        <img src={photo} alt="" className="col-span-2" />
        <div className="col-span-2">
            <p>Name: {name}</p>
            <p>Taste: {taste}</p>
            <p>Price: {price}</p>
        </div>
        <div>
            <Link to={`singleItem/${_id}`}>
            <p className="my-2" >
            <FaEye className="text-2xl bg-[#D2B48C] text-white p-1 rounded " ></FaEye>
            </p>
            </Link>
            <Link to={`updateCoffee/${_id}`}>
            <p className="my-2">
            <FaPen className="text-2xl bg-black text-white p-1 rounded "></FaPen>
            </p>
            </Link>
            <p className="my-2">
            <FaRegTrashCan className="text-2xl bg-red-500 text-white p-1 rounded " onClick={() => handleDelete(_id)}></FaRegTrashCan>
            </p>

        </div>
      </div>
    </>
  );
};

export default Coffees;

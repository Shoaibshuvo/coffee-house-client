import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner.jsx";
import Coffees from "../Coffees/Coffees.jsx";
import Follow from "../Follow/Follow.jsx";
import IconDiv from "../IconDiv/IconDiv.jsx";
import ProductContainer from "../ProductContainer/ProductContainer.jsx";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <>
      <Banner></Banner>
      <IconDiv></IconDiv>
      <ProductContainer></ProductContainer>
      <div className="grid md:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <Coffees key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></Coffees>
        ))}
      </div>
      <Follow></Follow>
    </>
  );
};

export default Home;

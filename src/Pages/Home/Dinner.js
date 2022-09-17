import React from "react";
import MenuCard from "./MenuCard";
import dinner1 from '../../images/dinner/dinner1.png'

const Dinner = () => {
  return (
    <div className="grid my-32 mb-12 grid-cols-3 gap-16">
      <MenuCard title="Healthy Meal Plan" price="23.99" img={dinner1}></MenuCard>
      <MenuCard title="Healthy Meal Plan" price="23.99" img={dinner1}></MenuCard>
      <MenuCard title="Healthy Meal Plan" price="23.99" img={dinner1}></MenuCard>
      <MenuCard title="Healthy Meal Plan" price="23.99" img={dinner1}></MenuCard>
      <MenuCard title="Healthy Meal Plan" price="23.99" img={dinner1}></MenuCard>
      <MenuCard title="Healthy Meal Plan" price="23.99" img={dinner1}></MenuCard>
    </div>
  );
};

export default Dinner;

import React from "react";
import MenuCard from "./MenuCard";
import breakfast1 from "../../images/breakfast/breakfast1.png";
import breakfast2 from "../../images/breakfast/breakfast2.png";
import breakfast3 from "../../images/breakfast/breakfast3.png";
import breakfast4 from "../../images/breakfast/breakfast4.png";
import breakfast5 from "../../images/breakfast/breakfast5.png";
import breakfast6 from "../../images/breakfast/breakfast6.png";

const Breakfast = () => {
  return (
    <div className="grid my-32 mb-12 grid-cols-3 gap-16">
      <MenuCard
        title="Healthy Meal Plan"
        price="23.99"
        img={breakfast1}
      ></MenuCard>
      <MenuCard
        title="Healthy Meal Plan"
        price="23.99"
        img={breakfast1}
      ></MenuCard>
      <MenuCard
        title="Healthy Meal Plan"
        price="23.99"
        img={breakfast1}
      ></MenuCard>
      <MenuCard
        title="Healthy Meal Plan"
        price="23.99"
        img={breakfast1}
      ></MenuCard>
      <MenuCard
        title="Healthy Meal Plan"
        price="23.99"
        img={breakfast1}
      ></MenuCard>
      <MenuCard
        title="Healthy Meal Plan"
        price="23.99"
        img={breakfast1}
      ></MenuCard>
    </div>
  );
};

export default Breakfast;

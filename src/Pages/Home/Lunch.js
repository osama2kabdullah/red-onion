import React, { Component } from "react";
import MenuCard from "./MenuCard";
import lunch1 from "../../images/lunch/lunch1.png";

const Lunch = () => {
    return (
        <div className="grid my-32 mb-12 grid-cols-3 gap-16">
        <MenuCard
          title="Healthy Meal Plan"
          price="23.99"
          img={lunch1}
        ></MenuCard>
        <MenuCard
          title="Healthy Meal Plan"
          price="23.99"
          img={lunch1}
        ></MenuCard>
        <MenuCard
          title="Healthy Meal Plan"
          price="23.99"
          img={lunch1}
        ></MenuCard>
        <MenuCard
          title="Healthy Meal Plan"
          price="23.99"
          img={lunch1}
        ></MenuCard>
        <MenuCard
          title="Healthy Meal Plan"
          price="23.99"
          img={lunch1}
        ></MenuCard>
        <MenuCard
          title="Healthy Meal Plan"
          price="23.99"
          img={lunch1}
        ></MenuCard>
      </div>
    )
}

export default Lunch;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Breakfast from "./Breakfast";
import Dinner from "./Dinner";
import Lunch from "./Lunch";
import MenuNav from "./MenuNav";


const Menus = () => {
  return (
    <section className="my-12">
      <MenuNav></MenuNav>
      
      <Routes>
        <Route path="/breakfast" element={<Breakfast></Breakfast>}></Route>
        <Route path="/lunch" element={<Lunch></Lunch>}></Route>
        <Route path="/dinner" element={<Dinner></Dinner>}></Route>
      </Routes>
      
      
      <div className="text-center">
      <button className="p-2 rounded-md text-white hover:bg-red-600 active:bg-red-500 font-bold bg-red-500">Checkout for food</button>
      </div>
    </section>
  );
};

export default Menus;

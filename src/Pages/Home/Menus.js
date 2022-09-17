import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Breakfast from "./Breakfast";
import MenuNav from "./MenuNav";


const Menus = () => {
  const {lunch} = useParams();
  return (
    <section className="my-12 mx-32">
      <MenuNav></MenuNav>
      
      {
        lunch ? <Outlet></Outlet> : <Breakfast></Breakfast>
      }
      
      
      <div className="text-center">
      <button className="p-2 rounded-md text-white hover:bg-red-600 active:bg-red-500 font-bold bg-red-500">Checkout for food</button>
      </div>
    </section>
  );
};

export default Menus;

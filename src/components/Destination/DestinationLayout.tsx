import React from "react";
import { Outlet } from "react-router-dom";
import SideNumbers from "../ui/SideNumbers";
import Title from "../ui/Title";
import DestinationNav from "./DestinationNav";

const destinationLinks = ["moon", "mars", "europa", "titan"];

const DestinationLayout = () => {
  return (
    <section className="Destination min-h-screen w-full text-center ">
      <div className="pt-28 flex justify-center gap-3">
        <SideNumbers index="1" dark={true} />
        <Title title="Pick your destination" />
      </div>
      <DestinationNav destinationLinks={destinationLinks} />
      <section className="-mt-64">
        <Outlet />
      </section>
    </section>
  );
};

export default DestinationLayout;

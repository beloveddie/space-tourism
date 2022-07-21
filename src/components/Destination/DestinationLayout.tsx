import React from "react";
import { Outlet } from "react-router-dom";
import PageHeading from "../ui/PageHeading";
import PageSection from "../ui/PageSection";
import SideNumbers from "../ui/SideNumbers";
import Title from "../ui/Title";

export const destinationLinks = ["moon", "mars", "europa", "titan"];

const DestinationLayout = () => {
  return (
    <section className="Destination min-h-screen w-full text-center lg:text-left ">
      <div className="lg:w-[57rem] lg:mx-auto">
        <PageHeading>
          <SideNumbers index="1" dark={true} />
          <Title title="Pick your destination" />
        </PageHeading>
        <PageSection>
          <Outlet />
        </PageSection>
      </div>
    </section>
  );
};

export default DestinationLayout;

import React from "react";
import { Outlet } from "react-router-dom";
import PageHeading from "../ui/PageHeading";
import PageSection from "../ui/PageSection";
import SideNumbers from "../ui/SideNumbers";
import Title from "../ui/Title";
import DestinationNav from "./DestinationNav";

const destinationLinks = ["moon", "mars", "europa", "titan"];

const DestinationLayout = () => {
  return (
    <section className="Destination min-h-screen w-full text-center ">
      <PageHeading>
        <SideNumbers index="1" dark={true} />
        <Title title="Pick your destination" />
      </PageHeading>
      <DestinationNav destinationLinks={destinationLinks} />
      <PageSection>
        <Outlet />
      </PageSection>
    </section>
  );
};

export default DestinationLayout;

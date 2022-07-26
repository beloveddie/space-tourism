import React from "react";
import { Outlet } from "react-router-dom";
import PageHeading from "../ui/PageHeading";
import PageSection from "../ui/PageSection";
import SideNumbers from "../ui/SideNumbers";
import Title from "../ui/Title";

export const technologyLinks = ["Launch vehicle", "Spaceport", "Space capsule"];

const TechnologyLayout = () => {
  return (
    <section className="Technology min-h-screen w-full">
      <div className="lg:max-w-7xl lg:mx-auto lg:pl-28">
        <PageHeading>
          <SideNumbers index="3" dark={true} />
          <Title title="Space Launch 101" />
        </PageHeading>
        <PageSection>
          <Outlet />
        </PageSection>
      </div>
    </section>
  );
};

export default TechnologyLayout;

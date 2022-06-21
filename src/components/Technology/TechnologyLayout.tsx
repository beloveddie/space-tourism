import React from "react";
import { Outlet } from "react-router-dom";
import PageHeading from "../ui/PageHeading";
import PageSection from "../ui/PageSection";
import SideNumbers from "../ui/SideNumbers";
import Title from "../ui/Title";
import TechnologyNav from "./TechnologyNav";

const technologyLinks = ["Launch vehicle", "Spaceport", "Space capsule"];

const TechnologyLayout = () => {
  return (
    <section className="Technology min-h-screen w-full">
      <PageHeading>
        <SideNumbers index="3" dark={true} />
        <Title title="Space Launch 101" />
      </PageHeading>
      <TechnologyNav technologyLinks={technologyLinks} />
      <PageSection>
        <Outlet />
      </PageSection>
    </section>
  );
};

export default TechnologyLayout;

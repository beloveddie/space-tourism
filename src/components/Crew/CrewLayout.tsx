import React from "react";
import { Outlet } from "react-router-dom";
import PageHeading from "../ui/PageHeading";
import PageSection from "../ui/PageSection";
import SideNumbers from "../ui/SideNumbers";
import Title from "../ui/Title";

export const crewNavLinks = [
  "anousheh-ansari",
  "victor-glover",
  "mark-shuttleworth",
  "douglas-hurley",
];

const CrewLayout = () => {
  return (
    <section className="Crew min-h-screen w-full text-center lg:text-left">
      <div className="lg:max-w-7xl lg:mx-auto lg:pl-28">
        <PageHeading>
          <SideNumbers index="2" dark={true} />
          <Title title="meet your crew" />
        </PageHeading>
        <PageSection>
          <Outlet />
        </PageSection>
      </div>
    </section>
  );
};

export default CrewLayout;

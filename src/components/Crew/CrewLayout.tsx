import React from "react";
import { Outlet } from "react-router-dom";
import PageHeading from "../ui/PageHeading";
import PageSection from "../ui/PageSection";
import SideNumbers from "../ui/SideNumbers";
import Title from "../ui/Title";
import CrewNav from "./CrewNav";

const crewNavLinks = [
  "anousheh-ansari",
  "victor-glover",
  "mark-shuttleworth",
  "douglas-hurley",
];

const CrewLayout = () => {
  return (
    <section className="Crew min-h-screen w-full text-center">
      <PageHeading>
        <SideNumbers index="2" dark={true} />
        <Title title="meet your crew" />
      </PageHeading>
      <div className="mt-72">
        <CrewNav crewNavLinks={crewNavLinks} />
        {/* <PageSection> */}
        <Outlet />
        {/* </PageSection> */}
      </div>
    </section>
  );
};

export default CrewLayout;
